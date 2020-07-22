"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "paletteIngredients",
      [
        {
          hexColor: "#795548",
          paletteId: 1,
          ingredientSpellingId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hexColor: "#CDDC39",
          paletteId: 1,
          ingredientSpellingId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hexColor: "#DD2C00",
          paletteId: 2,
          ingredientSpellingId: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hexColor: "#33691E",
          paletteId: 2,
          ingredientSpellingId: 73,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hexColor: "#FFEB3B",
          paletteId: 3,
          ingredientSpellingId: 64,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hexColor: "#FFCDD2",
          paletteId: 3,
          ingredientSpellingId: 72,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hexColor: "#FFF176",
          paletteId: 4,
          ingredientSpellingId: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hexColor: "#FAFAFA",
          paletteId: 5,
          ingredientSpellingId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hexColor: "#9E9D24",
          paletteId: 5,
          ingredientSpellingId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hexColor: "#33691E",
          paletteId: 5,
          ingredientSpellingId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("paletteIngredients", null, {});
  },
};
