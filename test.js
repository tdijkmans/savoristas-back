const { Sequelize, DataTypes } = require("sequelize");

const Palette = require("./models").palette;
const User = require("./models").user;
const Ingredient = require("./models").ingredient;
const paletteIngredient = require("./models").paletteIngredient;

async function main() {
  try {
    // Select all rows. Resolves with a (possibly empty) array
    const allP = await Palette.findAll({});
    console.log(allP);
  } catch (error) {
    console.log(error);
  }
}

// main();

async function getStuf() {
  return await Palette.findAll({
    include: [
      {
        // Notice `include` takes an ARRAY
        model: Ingredient,
      },
    ],
  });
}
console.log(getStuf());
