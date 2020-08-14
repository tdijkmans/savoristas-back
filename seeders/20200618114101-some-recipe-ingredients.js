"use strict"
const recipeIngredients = require("../referencedata/somerecipeingredientseeds.js")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const numberOfRecipesToSeed = 100
    const manyRecipeIngredients = recipeIngredients.slice(
      0,
      numberOfRecipesToSeed
    )
    const recipeIngredientSeeds = manyRecipeIngredients.map((i) => ({
      recipeId: i.recipeId,
      ingredientQuantity: i.ingredientQuantity,
      ingredientSpellingId: i.ingredientSpellingId,
      createdAt: new Date(),

      updatedAt: new Date()
    }))

    return await queryInterface.bulkInsert(
      "recipeIngredients",
      recipeIngredientSeeds,

      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("recipeIngredients", null, {})
  }
}
