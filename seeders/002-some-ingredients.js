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
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("ingredients", null, {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
}
