"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "paletteIngredients",
      [
        {
          hexColor: "#795548",
          paletteId: 1,
          ingredientId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hexColor: "#CDDC39",
          paletteId: 1,
          ingredientId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hexColor: "#DD2C00",
          paletteId: 2,
          ingredientId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hexColor: "#33691E",
          paletteId: 2,
          ingredientId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hexColor: "#FFEB3B",
          paletteId: 3,
          ingredientId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hexColor: "#FFCDD2",
          paletteId: 3,
          ingredientId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hexColor: "#FFF176",
          paletteId: 4,
          ingredientId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hexColor: "#FAFAFA",
          paletteId: 5,
          ingredientId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hexColor: "#9E9D24",
          paletteId: 5,
          ingredientId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hexColor: "#33691E",
          paletteId: 5,
          ingredientId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
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

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("paletteIngredients", null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
