"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "ingredients",
      [
        {
          name: "zalmfilet",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "kaneel",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "basilicum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "gember",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "tomaten",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "appel",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "citroen",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "knoflook",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "olijfolie",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ui",
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
    return queryInterface.bulkDelete("ingredients", null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
