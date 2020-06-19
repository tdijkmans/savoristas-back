const { Router } = require("express");
const Palette = require("../models").palette;
const Ingredient = require("../models").ingredient;

const router = new Router();

router.get("/", async (req, res) => {
  const limit = req.query.limit || 8;
  const offset = req.query.offset || 0;
  const Palettes = await Palette.findAndCountAll({
    limit,
    offset,
    include: [{ model: Ingredient, through: { attributes: ["hexColor"] } }],
    order: [[Ingredient, "createdAt", "DESC"]],
  });
  res.status(200).send({ message: "All Palettes delivered", Palettes });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  console.log(id);
  if (isNaN(parseInt(id))) {
    return res.status(400).send({
      message: `${id} is not a valid id number, the Palette does not exist.`,
    });
  }

  const palette = await Palette.findByPk(id, {
    include: [Ingredient],
    order: [[Ingredient, "createdAt", "DESC"]],
  });

  if (palette === null) {
    return res
      .status(404)
      .send({ message: `Palette with id ${id} is not found.` });
  }

  res
    .status(200)
    .send({ message: `Palette with id ${id} delivered.`, palette });
});

module.exports = router;
