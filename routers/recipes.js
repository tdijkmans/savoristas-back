const { Router } = require("express")
const { Op } = require("sequelize")

const auth = require("../auth/middleware")

const Recipe = require("../models").recipe
const Ingredient = require("../models").ingredient
const RecipeIngredient = require("../models").recipeIngredients
const IngredientSpelling = require("../models").ingredientSpelling
const User = require("../models").user

const router = new Router()

//This route gets all detailed recipes
router.get("/", async (req, res) => {
  try {
    const limit = req.query.limit || 10
    const offset = req.query.offset || 0

    const queryResult = await Recipe.findAndCountAll({
      limit,
      offset,
      order: [["createdAt", "DESC"]],

      //Prevent returning unneeded information and sensitive information like hashed password
      attributes: { exclude: ["userId"] },
      include: [
        {
          model: User,
          attributes: {
            exclude: ["password", "email", "createdAt", "updatedAt"]
          } //Prevent returning hashed password
        },
        {
          model: RecipeIngredient,
          attributes: ["id", "ingredientQuantity"],

          include: [
            {
              model: IngredientSpelling,
              attributes: ["spelling", "ingredientId"]
            }
          ]
        }
      ]
    })

    // The recipes list of JSON objects is nested too many levels, so flatten and properly format
    const formattedRecipes = await queryResult.rows.map((r) => ({
      id: r.id,
      name: r.name,
      description: r.description,
      user: r.user,
      recipeYield: r.recipeYield,
      cookTime: r.cookTime,
      image: r.image,
      recipeInstructions: r.recipeInstructions,
      createdAt: r.createdAt,
      updatedAt: r.updatedAt,
      recipeIngredients: r.recipeIngredients.map((r) => ({
        id: r.id,
        ingredientId: r.ingredientSpelling.ingredientId,
        ingredientQuantity: r.ingredientQuantity,
        ingredientSpelling: r.ingredientSpelling.spelling
      }))
    }))

    const responseObject = {
      message: "All detailed recipes delivered",
      recipes: { count: queryResult.count, rows: formattedRecipes }
    }

    res.status(200).send(responseObject)
  } catch (e) {
    console.log(e)
  }
})

//This route gets detailed recipes filtered by a list of ingredients Ids (i.e. a food palette)
router.get("/query", async (req, res) => {
  try {
    const queriedIngredientIds = JSON.parse(req.query.ingredientIds)

    const limit = req.query.limit || 10
    const offset =
      req.query.offset ||
      0```Currently filtering is implemented by retrieving all Ingredients (including associated Recipe Ids) 
      from queried ingredients (independent of ingredient spelling such as 'potato' vs 'potato'),
      filtered for intersecting Recipe ids. These are re-queried and return with details.
      This is not max performant, yet a direct query seems complicated in Sequelize and allows relatively easy formatting too.
      ```
    const ingredientsAndRecipes = await Ingredient.findAll({
      where: { id: queriedIngredientIds },
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      },
      include: [
        {
          model: IngredientSpelling,

          include: {
            model: RecipeIngredient,
            attributes: ["recipeId"]
          }
        }
      ]
    })

    async function extractRecipeIds(ingredientsAndRecipes) {
      const recipesWithIngredients = await ingredientsAndRecipes.map(
        (i) =>
          // ({
          // ingredientId: i.id,
          // ingredientName: i.name,
          // occursInRecipe:
          i.ingredientSpellings
            .map((o) => o.recipeIngredients)[0]
            .map((r) => r.recipeId)
        // })
      )

      const listOfRecipeIds = await recipesWithIngredients.reduce((a, b) =>
        b.filter(Set.prototype.has, new Set(a))
      )
      return listOfRecipeIds
    }

    const listOfRecipeIds = await extractRecipeIds(ingredientsAndRecipes)

    // const formattedRecipes = queryResult.rows

    const queryResult = await Recipe.findAndCountAll({
      limit,
      offset,
      where: { id: listOfRecipeIds },
      order: [["createdAt", "DESC"]],

      //Prevent returning unneeded information and sensitive information like hashed password
      attributes: { exclude: ["userId"] },
      include: [
        {
          model: User,
          attributes: {
            exclude: ["password", "email", "createdAt", "updatedAt"]
          } //Prevent returning hashed password
        },
        {
          model: RecipeIngredient,
          attributes: ["id", "ingredientQuantity"],

          include: [
            {
              model: IngredientSpelling,
              attributes: ["spelling", "ingredientId"]
            }
          ]
        }
      ]
    })

    // The recipes list of JSON objects is nested too many levels, so flatten and properly format
    const formattedRecipes = await queryResult.rows.map((r) => ({
      id: r.id,
      name: r.name,
      description: r.description,
      user: r.user,
      recipeYield: r.recipeYield,
      cookTime: r.cookTime,
      image: r.image,
      recipeInstructions: r.recipeInstructions,
      createdAt: r.createdAt,
      updatedAt: r.updatedAt,
      recipeIngredients: r.recipeIngredients.map((r) => ({
        id: r.id,
        ingredientId: r.ingredientSpelling.ingredientId,
        ingredientQuantity: r.ingredientQuantity,
        ingredientSpelling: r.ingredientSpelling.spelling
      }))
    }))

    const responseObject = {
      message: `All recipes filtered for ingredient(s ${queriedIngredientIds}, delivering recipe(s) ${listOfRecipeIds}`,
      filteredRecipes: { count: queryResult.count, rows: formattedRecipes }
    }

    res.status(200).send(responseObject)
  } catch (e) {
    console.log(e)
  }
})

//This route gets single detailed recipe by ID.
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params

    if (isNaN(parseInt(id))) {
      return res.status(400).send({
        message: `${id} is not a valid id number, the recipe does not exist.`
      })
    }

    const recipe = await Recipe.findByPk(id, {
      //Prevent returning unneeded information and sensitive information like hashed password

      include: [
        {
          model: User,
          attributes: ["id", "name"]
        },
        {
          model: RecipeIngredient,
          attributes: ["id", "ingredientQuantity"],

          include: [
            {
              model: IngredientSpelling,
              attributes: ["spelling"]
            }
          ]
        }
      ]
    })

    if (recipe === null) {
      return res
        .status(404)
        .send({ message: `Recipe with id ${id} is not found.` })
    }

    // The ingredient list of JSON objects is nested too many levels, so flatten and properly format the complete recipe
    const formattedRecipe = {
      id: recipe.id,
      name: recipe.name,
      description: recipe.description,
      user: recipe.user,
      recipeYield: recipe.recipeYield,
      cookTime: recipe.cookTime,
      image: recipe.image,
      recipeInstructions: recipe.recipeInstructions,
      createdAt: recipe.createdAt,
      updatedAt: recipe.updatedAt,
      recipeIngredients: recipe.recipeIngredients.map((i) => ({
        id: i.id,
        ingredientQuantity: i.ingredientQuantity,
        recipeIngredient: i.ingredientSpelling.spelling
      }))
    }

    const responseObject = {
      message: `Recipe with id ${id} delivered.`,
      recipe: formattedRecipe
    }

    res.status(200).send(responseObject)
  } catch (e) {
    console.log(e)
  }
})

//This posts a new recipe, while only existing ingredients can be used
router.post("/", auth, async (req, res) => {
  try {
    const {
      name,
      description,
      recipeIngredientList,
      recipeYield,
      instructions,
      cookTime,
      userId,
      image
    } = req.body

    if (!name || !description || !recipeIngredientList) {
      return res.status(400).send({
        message:
          "Please provide a name, description and at least one ingredient."
      })
    }

    if (!image) {
      // Current defaulting image, while no image upload is supported yet.
      const image =
        " https://static-images.jumbo.com/product_images/Recipe_502710-01_560x560.jpg"
    }

    const newRecipe = await Recipe.create({
      image,
      name: name,
      description: description,
      recipeYield: recipeYield,
      recipeInstructions: instructions,
      cookTime: cookTime,
      userId: userId
    })

    async function asIngredientAndRecipeIngredient(i) {
      const spelling = await IngredientSpelling.findOne({
        where: { spelling: i.spelling }
      })
      console.log(spelling)
      await RecipeIngredient.create({
        recipeId: newRecipe.id,
        ingredientSpellingId: spelling.dataValues.id,
        ingredientQuantity: i.ingredientQuantity
      })
    }

    const toResolve = await recipeIngredientList.map((i) =>
      asIngredientAndRecipeIngredient(i)
    )
    await Promise.all(toResolve)

    return res.status(200).send({
      message: "New recipe created.",
      rec: newRecipe
    })
  } catch (error) {
    console.log(error)
    return res.status(400).send({ message: "Something went wrong, sorry" })
  }
})

module.exports = router
