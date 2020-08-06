"use strict";
const ingredients = require("../referencedata/curatedIngredients.js");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const ingredientSpellings_S = ingredients.map((i, index) => ({
      ingredientId: i.pk,
      spelling: i.name_NL_S,
      plurality: "s",
      synonym: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    return await queryInterface.bulkInsert(
      "ingredientSpellings",
      ingredientSpellings_S,
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

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return await queryInterface.bulkDelete("ingredientSpellings", null, {});
  },
};
