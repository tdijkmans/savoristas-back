const { Router } = require("express");
const { Op } = require("sequelize");

const auth = require("../auth/middleware");
const Recipe = require("../models").recipe;
const Ingredient = require("../models").ingredient;
const RecipeIngredient = require("../models").recipeIngredients;

const router = new Router();

router.get("/", async (req, res) => {
  const limit = req.query.limit || 8;
  const offset = req.query.offset || 0;
  const recipes = await Recipe.findAndCountAll({
    limit,
    offset,
    include: [Ingredient],
    order: [[Ingredient, "createdAt", "DESC"]],
  });

  res.status(200).send({ message: "All recipes delivered", recipes });
});

router.get("/query", async (req, res) => {
  const queriedIngredients = JSON.parse(req.query.ingredients);
  console.log("body", req.body);
  const allRecipes = await Recipe.findAll({
    include: {
      model: Ingredient,
    },
  });
  const queriedRecipes = allRecipes.reduce((acc, rec) => {
    const recipeIngIds = rec.ingredients.map((i) => i.id);
    const valid = queriedIngredients.every((id) => recipeIngIds.includes(id));
    return valid ? [...acc, rec] : acc;
  }, []);

  res.json({
    message: "Queried recipes",
    result: queriedRecipes,
  });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  console.log(id);
  if (isNaN(parseInt(id))) {
    return res.status(400).send({
      message: `${id} is not a valid id number, the recipe does not exist.`,
    });
  }

  const recipe = await Recipe.findByPk(id, {
    include: [Ingredient],
    order: [[Ingredient, "createdAt", "DESC"]],
  });

  if (recipe === null) {
    return res
      .status(404)
      .send({ message: `Recipe with id ${id} is not found.` });
  }

  res.status(200).send({ message: `Recipe with id ${id} delivered.`, recipe });
});

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
      image,
    } = req.body;

    if (!name || !description || !recipeIngredientList) {
      return res.status(400).send({
        message:
          "Please provide a name, description and at least one ingredient.",
      });
    }

    if (!image) {
      // Current defaulting image, while no image upload is supported yet.
      const image =
        " https://static-images.jumbo.com/product_images/Recipe_502710-01_560x560.jpg";
    }

    const newRecipe = await Recipe.create({
      image,
      name: name,
      description: description,
      recipeYield: recipeYield,
      recipeInstructions: instructions,
      cookTime: cookTime,
      userId: userId,
    });

    async function asIngredientAndRecipeIngredient(i) {
      const ingredient = await Ingredient.findOrCreate({
        where: { name: i.name },
      });

      await RecipeIngredient.create({
        recipeId: newRecipe.id,
        ingredientId: ingredient[0].dataValues.id,
        ingredientQuantity: i.ingredientQuantity,
      });
    }
    await recipeIngredientList.map((i) => asIngredientAndRecipeIngredient(i));

    return res.status(200).send({
      message: "New recipe created.",
      rec: newRecipe,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
