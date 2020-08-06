"use strict";
const ingredients = require("../referencedata/curatedIngredients.js");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let ingredientSpellings_P = ingredients.filter(function (i) {
      return i.name_NL_P !== "";
    });
    ingredientSpellings_P = ingredientSpellings_P.map((i, index) => ({
      ingredientId: i.pk,
      spelling: i.name_NL_P,
      plurality: "P",
      synonym: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    return await queryInterface.bulkInsert(
      "ingredientSpellings",
      ingredientSpellings_P,
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
