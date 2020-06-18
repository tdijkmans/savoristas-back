"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "palettes",
      [
        {
          name: "Appeltaart",
          description: "Grootmoeders tijd",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          name: "Bruschetta!",
          description: "Italie op zijn best",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          name: "Aan de Middelandse Zee",
          description: "Goed voor ieder bbq",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          name: "Gember is geweldig",
          description: "Maar niet voor iedereen",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          name: "Knoflook klassieker :-)",
          description: "Knoflook olijfolie basilicum",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("palettes", null, {});
  },
};
