"use strict"
module.exports = (sequelize, DataTypes) => {
  const ingredient = sequelize.define(
    "ingredient",
    {
      representation: { type: DataTypes.STRING, allowNull: false, unique: true }
    },
    {}
  )
  ingredient.associate = function (models) {
    // associations can be defined here
    // ingredient.belongsToMany(models.palette, {
    //   through: "paletteIngredients",
    //   foreignKey: "ingredientId",
    // });
    ingredient.hasMany(models.ingredientSpelling, {
      foreignKey: "ingredientId"
    })
  }
  return ingredient
}
