"use strict";
module.exports = (sequelize, DataTypes) => {
  const ingredient = sequelize.define(
    "ingredient",
    {
      name: { type: DataTypes.STRING, allowNull: false, unique: true },
    },
    {}
  );
  ingredient.associate = function (models) {
    // associations can be defined here
    ingredient.belongsToMany(models.palette, {
      through: "paletteIngredients",
      foreignKey: "paletteId",
    });
    ingredient.belongsToMany(models.recipe, {
      through: "recipeIngredients",
      foreignKey: "recipeId",
    });
  };
  return ingredient;
};
