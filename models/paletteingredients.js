"use strict";
module.exports = (sequelize, DataTypes) => {
  const paletteIngredients = sequelize.define(
    "paletteIngredient",
    {
      hexColor: DataTypes.STRING,
      paletteId: DataTypes.INTEGER,
      ingredientId: DataTypes.INTEGER,
    },
    {}
  );
  paletteIngredients.associate = function (models) {
    // associations can be defined here
    paletteIngredients.belongsTo(models.palette);
    paletteIngredients.belongsTo(models.ingredient);
  };
  return paletteIngredients;
};
