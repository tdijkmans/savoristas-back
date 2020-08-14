"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("recipeIngredients", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      recipeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "recipes",
          key: "id",
        },
      },
      ingredientQuantity: {
        type: Sequelize.STRING,
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("recipeIngredients");
  },
};
