"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("paletteIngredients", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      hexColor: {
        type: Sequelize.STRING,
      },
      paletteId: {
        type: Sequelize.INTEGER,
        references: {
          model: "palettes",
          key: "id",
        },
      },
      ingredientSpellingId: {
        type: Sequelize.INTEGER,
        references: {
          model: "ingredientSpellings",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable("paletteIngredients");
  },
};
