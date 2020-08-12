const { Router } = require("express")

const Palette = require("../models").palette
const PaletteIngredient = require("../models").paletteIngredient
const IngredientSpelling = require("../models").ingredientSpelling
const User = require("../models").user

const Recipe = require("../models").recipe
const Ingredient = require("../models").ingredient
const RecipeIngredient = require("../models").recipeIngredients

const router = new Router()

router.get("/", async (req, res) => {
  try {
    const ingredients = await Ingredient.findAndCountAll({
      include: { model: IngredientSpelling },
      order: [["id", "ASC"]]
    })
    res.status(200).send({ message: "All ingredients delivered", ingredients })
  } catch (e) {
    console.log(e)
  }
})

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params

    if (isNaN(parseInt(id))) {
      return res.status(400).send({
        message: `${id} is not a valid id number, the ingredient does not exist.`
      })
    }

    const ingredient = await Ingredient.findByPk(id, {
      include: { model: IngredientSpelling }
    })

    res
      .status(200)
      .send({ message: `Ingredient with id ${id} delivered.`, ingredient })
  } catch (e) {
    console.log(e)
  }
})

module.exports = router
