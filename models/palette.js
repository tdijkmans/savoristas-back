"use strict";
module.exports = (sequelize, DataTypes) => {
  const palette = sequelize.define(
    "palette",
    {
      name: { type: DataTypes.STRING, allowNull: false, unique: true },
      description: { type: DataTypes.STRING },
      userId: DataTypes.INTEGER,
    },
    {}
  );
  palette.associate = function (models) {
    palette.belongsTo(models.user);
    palette.belongsToMany(models.ingredient, { through: "paletteIngredients" });

    // associations can be defined here
  };
  return palette;
};
