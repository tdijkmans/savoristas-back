"use strict";
module.exports = (sequelize, DataTypes) => {
  const ingredientSpelling = sequelize.define(
    "IngredientSpelling",
    {
      spelling: { type: DataTypes.STRING, allowNull: false, unique: true },

      plurality: DataTypes.STRING,
      synonym: DataTypes.BOOLEAN,
      ingredientId: DataTypes.INTEGER,
    },
    {}
  );
  ingredientSpelling.associate = function (models) {
    // associations can be defined here

    ingredientSpelling.belongsTo(models.ingredient);
    ingredientSpelling.belongsToMany(models.ingredient, {
      through: "recipeIngredients",
      foreignKey: "recipeId",
    });
  };
  return ingredientSpelling;
};
