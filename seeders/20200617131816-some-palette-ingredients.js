"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "paletteIngredients",
      [
        {
          hexColor: "#6D2D01",
          paletteId: 1,
          ingredientSpellingId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hexColor: "#FBC021",
          paletteId: 1,
          ingredientSpellingId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hexColor: "#DD2C00",
          paletteId: 2,
          ingredientSpellingId: 74,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hexColor: "#33691E",
          paletteId: 2,
          ingredientSpellingId: 73,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hexColor: "#E9C425",
          paletteId: 3,
          ingredientSpellingId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hexColor: "#E5873D",
          paletteId: 3,
          ingredientSpellingId: 72,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hexColor: "#FFF176",
          paletteId: 4,
          ingredientSpellingId: 23,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hexColor: "#FAFAFA",
          paletteId: 5,
          ingredientSpellingId: 64,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hexColor: "#9E9D24",
          paletteId: 5,
          ingredientSpellingId: 65,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hexColor: "#33691E",
          paletteId: 5,
          ingredientSpellingId: 73,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          hexColor: "#261300",
          paletteId: 6,
          ingredientSpellingId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hexColor: "#482300",
          paletteId: 6,
          ingredientSpellingId: 142,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hexColor: "#95602E",
          paletteId: 6,
          ingredientSpellingId: 310,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hexColor: "#B98553",
          paletteId: 6,
          ingredientSpellingId: 212,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hexColor: "#6D3E11",
          paletteId: 6,
          ingredientSpellingId: 146,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hexColor: "#DE2B3E",
          paletteId: 7,
          ingredientSpellingId: 306,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          hexColor: "#D1F479",
          paletteId: 7,
          ingredientSpellingId: 136,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hexColor: "#FAFBF3",
          paletteId: 8,
          ingredientSpellingId: 67,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hexColor: "#A38C70",
          paletteId: 8,
          ingredientSpellingId: 68,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("paletteIngredients", null, {})
  }
}
