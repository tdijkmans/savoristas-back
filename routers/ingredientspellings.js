const { Router } = require("express")

const IngredientSpelling = require("../models").ingredientSpelling

const Ingredient = require("../models").ingredient

const router = new Router()

router.get("/", async (req, res) => {
  try {
    const ingredientSpellings = await IngredientSpelling.findAndCountAll({
      attributes: ["id", "spelling"],
      include: { model: Ingredient, attributes: ["id"] },

      order: [["id", "ASC"]]
    })

    const formattedIngredientSpellings = await ingredientSpellings.rows.map(
      (s) => ({
        id: s.id,
        spelling: s.spelling,
        ingredientId: s.ingredient.id
      })
    )

    const responseObject = {
      message: `All ${formattedIngredientSpellings.length} ingredient spellings delivered`,
      ingredientSpellings: formattedIngredientSpellings
    }

    res.status(200).send(responseObject)
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

    const ingredientSpelling = await IngredientSpelling.findByPk(id, {
      include: { model: Ingredient }
    })

    const formattedIngredientSpelling = {
      id: ingredientSpelling.id,
      spelling: ingredientSpelling.spelling,
      ingredientId: ingredientSpelling.ingredient.id
    }

    const responseObject = {
      message: `Ingredient spelling with id ${id} delivered.`,
      ingredientSpelling: formattedIngredientSpelling
    }

    res.status(200).send(responseObject)
  } catch (e) {
    console.log(e)
  }
})

module.exports = router
