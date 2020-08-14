"use strict"

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
          userId: Math.floor(Math.random() * 9) + 1
        },
        {
          name: "Bruschetta!",
          description: "Italië op zijn best",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: Math.floor(Math.random() * 9) + 1
        },
        {
          name: "Aan de Middelandse Zee",
          description: "Goed voor ieder barbecuefeestje",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: Math.floor(Math.random() * 9) + 1
        },
        {
          name: "Gember is geweldig",
          description: "Als je er van houdt",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: Math.floor(Math.random() * 9) + 1
        },
        {
          name: "Knoflook klassieker :-)",
          description: "Knoflook olijfolie basilicum",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: Math.floor(Math.random() * 9) + 1
        },
        {
          name: "Five Spices",
          description: "Chinese glorie",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: Math.floor(Math.random() * 9) + 1
        },
        {
          name: "Fruitsalade!",
          description: "Erg bijzondere combinatie",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: Math.floor(Math.random() * 9) + 1
        },
        {
          name: "De basics",
          description: "Goed voor ieder bbq",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: Math.floor(Math.random() * 9) + 1
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("palettes", null, {})
  }
}
