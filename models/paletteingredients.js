"use strict";
module.exports = (sequelize, DataTypes) => {
  const paletteIngredient = sequelize.define(
    "paletteIngredient",
    {
      hexColor: DataTypes.STRING,
      paletteId: DataTypes.INTEGER,
      ingredientId: DataTypes.INTEGER,
    },
    {}
  );
  paletteIngredient.associate = function (models) {
    // associations can be defined here
    paletteIngredient.belongsTo(models.palette);
    paletteIngredient.belongsTo(models.ingredient);
  };
  return paletteIngredient;
};
