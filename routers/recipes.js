const { Router } = require("express");
const Recipe = require("../models").recipe;
const Ingredient = require("../models").ingredient;

const router = new Router();

router.get("/", async (req, res) => {
  const limit = req.query.limit || 8;
  const offset = req.query.offset || 0;
  const recipes = await Recipe.findAndCountAll({
    limit,
    offset,
    include: [Ingredient],
    order: [[Ingredient, "createdAt", "DESC"]],
  });
  res.status(200).send({ message: "All recipes delivered", recipes });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  console.log(id);
  if (isNaN(parseInt(id))) {
    return res.status(400).send({
      message: `${id} is not a valid id number, the recipe does not exist.`,
    });
  }

  const recipe = await Recipe.findByPk(id, {
    include: [Ingredient],
    order: [[Ingredient, "createdAt", "DESC"]],
  });

  if (recipe === null) {
    return res
      .status(404)
      .send({ message: `Recipe with id ${id} is not found.` });
  }

  res.status(200).send({ message: `Recipe with id ${id} delivered.`, recipe });
});

module.exports = router;
