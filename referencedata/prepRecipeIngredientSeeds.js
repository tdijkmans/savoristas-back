const recipes = require("./recipes.js")
const IngredientSpelling = require("../models").ingredientSpelling
const fs = require("fs")

const manyRecipes = recipes.slice(0, 1000)
let seeds = []
let unknownSpellings = []

async function prepRecipeIngredientSeeds(manyRecipes) {
  try {
    //This function retrieves a spelling Id if the Spelling exists
    async function getIdfromSpelling(someSpelledIngredient) {
      try {
        const foundSpelling = await IngredientSpelling.findOne({
          where: { spelling: someSpelledIngredient }
        })
        if (foundSpelling) {
          return await foundSpelling.id
        }
      } catch (err) {
        console.log(err)
      }
    }

    // Get the ingredient quantity and the ingredient spelling by splitting the elements of the recipeIngredient array on the first white space
    // Before the first space => that is quantity
    // After the first space => that is the ingredient spelling
    async function harvestQntsAndSpelledIngrIds(recipe, index) {
      const listQuantizedIngredients = await recipe.recipeIngredient
      const listOfQuantsAndIngrs = await listQuantizedIngredients.map((i) => ({
        ingredientQuantity: i.substr(0, i.indexOf(" ")),
        ingredientSpelling: i.substr(i.indexOf(" ") + 1)
      }))

      //Get required fields for seeding purposes
      const result = await Promise.all(
        listOfQuantsAndIngrs.map(async (i) => {
          const ingredientSpellingId = await getIdfromSpelling(
            i.ingredientSpelling
          )

          //This is the required seed info, needed to be supplemented with "Created" and  "Updated" field when seeding
          const seed = {
            recipeId: index + 1,
            ingredientQuantity: i.ingredientQuantity,
            ingredientSpellingId: ingredientSpellingId
          }

          if (seed.ingredientSpellingId === undefined) {
            unknownSpellings.push(i.ingredientSpelling)
          } else {
            seeds.push(seed)

            //And here we write to file, for later import and subsequent seeding.
            // Not the best moment to trigger file writing, but coulnd't get it to work outside loop
            const recipeIngrientSeeds = JSON.stringify(seeds)
            fs.writeFile(
              "./somerecipeingredientseeds.json",
              recipeIngrientSeeds,
              "utf8",
              (err) => {
                if (err) {
                  return console.log(err)
                }
                console.log("Saved seed data to file.")
              }
            )

            const currentlyIgnoredIngredientSpellings = JSON.stringify(
              unknownSpellings
            )
            fs.writeFile(
              "./currentlyIgnoredSpellings.json",
              unknownSpellings,
              "utf8",
              (err) => {
                if (err) {
                  return console.log(err)
                }
                console.log("Saved ignnored spellings to file.")
              }
            )

            // console.log(seed)
          }
        })
      )
    }

    manyRecipes.map((r, index) => harvestQntsAndSpelledIngrIds(r, index))

    return seeds
  } catch (err) {
    console.error(err)
  }
}

const recipeIngredientSeeds = prepRecipeIngredientSeeds(manyRecipes)
