"use strict";
module.exports = (sequelize, DataTypes) => {
  const recipeIngredients = sequelize.define(
    "recipeIngredients",
    {
      recipeId: DataTypes.INTEGER,
      ingredientQuantity: DataTypes.STRING,
      ingredientSpellingId: DataTypes.INTEGER,
    },
    {}
  );
  recipeIngredients.associate = function (models) {
    // associations can be defined here
    recipeIngredients.belongsTo(models.recipe);
    recipeIngredients.belongsToMany(models.ingredient, {
      through: "ingredientSpellings",
    });
  };
  return recipeIngredients;
};
