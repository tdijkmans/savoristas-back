"use strict"
const ingredients = require("../referencedata/curatedIngredients.js")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const ingredientNames = ingredients.map((i) => ({
      representation: i.representation,
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    return await queryInterface.bulkInsert("ingredients", ingredientNames, {})
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("ingredients", null, {})
  }
}
