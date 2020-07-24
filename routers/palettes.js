const { Router } = require("express");
const auth = require("../auth/middleware");

const Palette = require("../models").palette;
const Ingredient = require("../models").ingredient;
const paletteIngredient = require("../models").paletteIngredient;
const ingredientSpelling = require("../models").ingredientSpelling;
const user = require("../models").user;

const router = new Router();

router.get("/", async (req, res) => {
  const limit = req.query.limit || 8;
  const offset = req.query.offset || 0;
  const Palettes = await Palette.findAndCountAll({
    limit,
    offset,
    include: { all: true, nested: true },
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
    include: [
      {
        model: user,
        attributes: ["name"],
      },
      {
        model: paletteIngredient,
        attributes: ["hexColor"],

        include: {
          model: ingredientSpelling,
          attributes: ["spelling", "ingredientId"],
        },
      },
    ],
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

    async function asSpellingAndPaletteIngredient(i) {
      const ingredient = await ingredientSpelling.findOne({
        where: { spelling: i.name },
      });

      await paletteIngredient.create({
        paletteId: newPalette.id,
        ingredientSpellingId: ingredient.id,
        hexColor: i.hexColor,
      });
    }

    const toResolvePalette = ingredientList.map((i) =>
      asSpellingAndPaletteIngredient(i)
    );
    await Promise.all(toResolvePalette);

    const palette = await Palette.findByPk(newPalette.id, {
      include: [
        {
          model: user,
          attributes: ["name"],
        },
        {
          model: paletteIngredient,
          attributes: ["hexColor"],

          include: {
            model: ingredientSpelling,
            attributes: ["spelling", "ingredientId"],
          },
        },
      ],
    });

    return res.status(200).send({
      message: `New palette created.`,
      Palette: palette,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ message: "Something went wrong, sorry", response: req.body });
  }
});

module.exports = router;
