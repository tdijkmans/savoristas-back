"use strict";

const palette = require("./palette");

module.exports = (sequelize, DataTypes) => {
  const paletteIngredients = sequelize.define(
    "paletteIngredient",
    {
      hexColor: DataTypes.STRING,
      paletteId: DataTypes.INTEGER,
      ingredientSpellingId: DataTypes.INTEGER,
    },
    {}
  );
  paletteIngredients.associate = function (models) {
    // associations can be defined here
    paletteIngredients.belongsTo(models.ingredientSpelling);
  };
  return paletteIngredients;
};
