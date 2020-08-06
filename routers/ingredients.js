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
  const limit = req.query.limit || 8
  const offset = req.query.offset || 0
  const IngredientSpellings = await IngredientSpelling.findAndCountAll({
    limit,
    offset,
    include: { all: true, nested: true },
    order: [["createdAt", "DESC"]]
  })
  res
    .status(200)
    .send({ message: "All IngredientSpelling delivered", IngredientSpellings })
})

router.get("/:id", async (req, res) => {
  const { id } = req.params

  console.log(id)
  if (isNaN(parseInt(id))) {
    return res.status(400).send({
      message: `${id} is not a valid id number, the IngredientSpelling does not exist.`
    })
  }

  const spelling = await IngredientSpelling.findByPk(id, {
    include: { all: true, nested: true }
  })

  if (spelling === null) {
    return res
      .status(404)
      .send({ message: `IngredientSpelling with id ${id} is not found.` })
  }

  res
    .status(200)
    .send({ message: `IngredientSpelling with id ${id} delivered.`, spelling })
})

module.exports = router
