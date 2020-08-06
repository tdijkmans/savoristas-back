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
              attributes: ["spelling"]
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
        ingredientQuantity: r.ingredientQuantity,
        recipeIngredient: r.ingredientSpelling.spelling
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

//THIS UNLIKELY WORKS DUE TO CHANGE IN MODELS
router.get("/query", async (req, res) => {
  const queriedIngredients = JSON.parse(req.query.ingredients)
  console.log("body", req.body)
  const allRecipes = await Recipe.findAll({
    include: {
      model: Ingredient
    }
  })
  const queriedRecipes = allRecipes.reduce((acc, rec) => {
    const recipeIngIds = rec.ingredients.map((i) => i.id)
    const valid = queriedIngredients.every((id) => recipeIngIds.includes(id))
    return valid ? [...acc, rec] : acc
  }, [])

  res.json({
    message: "Recipes filtered by palette delivered",
    result: queriedRecipes
  })
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

//THIS UNLIKELY WORKS DUE TO CHANGE IN MODELS
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
      const ingredient = await Ingredient.findOrCreate({
        where: { name: i.name }
      })

      await RecipeIngredient.create({
        recipeId: newRecipe.id,
        ingredientId: ingredient[0].dataValues.id,
        ingredientQuantity: i.ingredientQuantity
      })
    }

    // HAVE TO RESOLVE THIS ARRAY OF PROMISES OTHERWISE NO RETURNED RESULT BY FINDBYPK
    await recipeIngredientList.map((i) => asIngredientAndRecipeIngredient(i))

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
