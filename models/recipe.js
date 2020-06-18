"use strict";
module.exports = (sequelize, DataTypes) => {
  const recipe = sequelize.define(
    "recipe",
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      recipeYield: DataTypes.INTEGER,
      cookTime: DataTypes.STRING,
      image: DataTypes.STRING,
      recipeInstructions: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {}
  );
  recipe.associate = function (models) {
    // associations can be defined here
    recipe.belongsTo(models.user);
    recipe.belongsToMany(models.ingredient, {
      through: "recipeIngredients",
      foreignKey: "ingredientId",
    });
  };
  return recipe;
};