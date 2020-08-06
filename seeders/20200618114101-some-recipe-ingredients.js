"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "recipeIngredients",
      [
        {
          recipeId: 1,
          ingredientQuantity: "een bosje",
          ingredientSpellingId: 73,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          recipeId: 1,
          ingredientQuantity: "een bolletje",
          ingredientSpellingId: 249,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          recipeId: 1,
          ingredientQuantity: "100 ml",
          ingredientSpellingId: 250,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          recipeId: 1,
          ingredientQuantity: "1 hele",
          ingredientSpellingId: 188,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          recipeId: 1,
          ingredientQuantity: "2 stuks",
          ingredientSpellingId: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          recipeId: 2,
          ingredientQuantity: "100 ml",
          ingredientSpellingId: 250,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          recipeId: 2,
          ingredientQuantity: "1 kg",
          ingredientSpellingId: 251,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          recipeId: 2,
          ingredientQuantity: "0,5 kg",
          ingredientSpellingId: 39,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          recipeId: 2,
          ingredientQuantity: "een bolletje",
          ingredientSpellingId: 249,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          recipeId: 3,
          ingredientQuantity: "100 ml",
          ingredientSpellingId: 250,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          recipeId: 3,
          ingredientQuantity: "1 kg",
          ingredientSpellingId: 251,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          recipeId: 3,
          ingredientQuantity: "0,5 kg",
          ingredientSpellingId: 39,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          recipeId: 3,
          ingredientQuantity: "een bosje",
          ingredientSpellingId: 73,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          recipeId: 4,
          ingredientQuantity: "100 ml",
          ingredientSpellingId: 250,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          recipeId: 4,
          ingredientQuantity: "een flink stuk",
          ingredientSpellingId: 208,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          recipeId: 4,
          ingredientQuantity: "een bosje",
          ingredientSpellingId: 73,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          recipeId: 5,
          ingredientQuantity: "100 ml",
          ingredientSpellingId: 250,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          recipeId: 5,
          ingredientQuantity: "1 kg",
          ingredientSpellingId: 251,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          recipeId: 5,
          ingredientQuantity: "een bolletje",
          ingredientSpellingId: 249,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          recipeId: 5,
          ingredientQuantity: "0,5 kg",
          ingredientSpellingId: 39,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          recipeId: 3,
          ingredientQuantity: "een bosje",
          ingredientSpellingId: 73,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          recipeId: 6,
          ingredientQuantity: "100 ml",
          ingredientSpellingId: 250,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          recipeId: 6,
          ingredientQuantity: "1 kg",
          ingredientSpellingId: 251,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          recipeId: 6,
          ingredientQuantity: "2 theelepels",
          ingredientSpellingId: 73,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          recipeId: 6,
          ingredientQuantity: "0,5 kg",
          ingredientSpellingId: 39,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          recipeId: 7,
          ingredientQuantity: "2 theelepels",
          ingredientSpellingId: 73,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          recipeId: 8,
          ingredientQuantity: "1 kg",
          ingredientSpellingId: 186,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          recipeId: 8,
          ingredientQuantity: "2 theelepels",
          ingredientSpellingId: 73,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          recipeId: 8,
          ingredientQuantity: "een flink stuk",
          ingredientSpellingId: 208,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          recipeId: 9,
          ingredientQuantity: "een flink stuk",
          ingredientSpellingId: 208,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          recipeId: 10,
          ingredientQuantity: "2 stuks",
          ingredientSpellingId: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          recipeId: 10,
          ingredientQuantity: "een flink stuk",
          ingredientSpellingId: 208,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          recipeId: 10,
          ingredientQuantity: "100 ml",
          ingredientSpellingId: 250,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("recipeIngredients", null, {})
  }
}
