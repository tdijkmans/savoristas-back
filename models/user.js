"use strict"
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      image: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {}
  )
  user.associate = function (models) {
    // associations can be defined here
    user.hasMany(models.palette)
    user.hasMany(models.recipe)
  }
  return user
}
