"use strict"
const recipes = require("../referencedata/recipes.js")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const numberOfRecipesToSeed = 100
    const manyRecipes = recipes.slice(0, numberOfRecipesToSeed)
    const recipeSeeds = manyRecipes.map((r, index) => ({
      name: r.name,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: Math.floor(Math.random() * 4) + 1,
      // id: index + 1,
      image: `https://static-images.jumbo.com/${r.image}`,
      description: r.description,
      recipeYield: r.recipeYield,
      cookTime: r.totalTime,
      recipeInstructions: r.recipeInstructions
    }))
    return await queryInterface.bulkInsert("recipes", recipeSeeds, {})
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("recipes", null, {})
  }
}
