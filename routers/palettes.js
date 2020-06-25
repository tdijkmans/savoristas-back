const { Router } = require("express");
const auth = require("../auth/middleware");

const Palette = require("../models").palette;
const Ingredient = require("../models").ingredient;
const paletteIngredient = require("../models").paletteIngredient;

const router = new Router();

router.get("/", async (req, res) => {
  const limit = req.query.limit || 8;
  const offset = req.query.offset || 0;
  const Palettes = await Palette.findAndCountAll({
    limit,
    offset,
    include: [{ model: Ingredient, through: { attributes: ["hexColor"] } }],
    order: [["createdAt", "DESC"]],
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

router.post("/", auth, async (req, res) => {
  try {
    const { name, description, ingredientList, userId } = req.body;

    if (!name || !description || !ingredientList) {
      return res.status(400).send({
        message:
          "Please provide a name, description and at least one ingredient.",
      });
    }

    const newPalette = await Palette.create({
      name: name,
      description: description,
      userId: userId,
    });

    async function asIngredientAndPaletteIngredient(i) {
      const ingredient = await Ingredient.findOrCreate({
        where: { name: i.name },
      });

      await paletteIngredient.create({
        paletteId: newPalette.id,
        ingredientId: ingredient[0].dataValues.id,
        hexColor: i.hexColor,
      });
    }

    await ingredientList.map((i) => asIngredientAndPaletteIngredient(i));

    const palette = await Palette.findByPk(newPalette.id, {
      include: [Ingredient],
      order: [[Ingredient, "createdAt", "DESC"]],
    });

    return res
      .status(200)
      .send({ message: "New palette created.", Palette: palette });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
