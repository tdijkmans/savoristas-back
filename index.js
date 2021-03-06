const express = require("express")
const app = express()

/**
 *
 * express.json():
 * be able to read request bodies of JSON requests
 * a.k.a. body-parser
 * Needed to be able to POST / PUT / PATCH
 *
 * docs: https://expressjs.com/en/api.html#express.json
 *
 */

const bodyParserMiddleWare = express.json()
app.use(bodyParserMiddleWare)

/**
 *
 * cors middleware:
 *
 * Since our api is hosted on a different domain than our client
 * we are are doing "Cross Origin Resource Sharing" (cors)
 * Cross origin resource sharing is disabled by express by default
 * for safety reasons (should everybody be able to use your api, I don't think so!)
 *
 * We are configuring cors to accept all incoming requests
 * If you want to limit this, you can look into "white listing" only certain domains
 *
 * docs: https://expressjs.com/en/resources/middleware/cors.html
 *
 */

const corsMiddleWare = require("cors")
app.use(corsMiddleWare())

/**
 *
 * authMiddleware:
 *
 * When a token is provided:
 * decrypts a jsonwebtoken to find a userId
 * queries the database to find the user with that add id
 * adds it to the request object
 * user can be accessed as req.user when handling a request
 * req.user is a sequelize User model instance
 *
 * When no or an invalid token is provided:
 * returns a 4xx reponse with an error message
 *
 */

const authMiddleWare = require("./auth/middleware")

/**
 * Routes
 *
 */

// GET endpoint for testing purposes, can be removed
app.get("/", (req, res) => {
  res.send("Hi from express")
})

// POST endpoint for testing purposes, can be removed
app.post("/echo", (req, res) => {
  res.json({
    youPosted: {
      ...req.body
    }
  })
})

const authRouter = require("./routers/auth")
app.use("/", authRouter)

const recipesRouter = require("./routers/recipes")
app.use("/recipes", recipesRouter)

const palettesRouter = require("./routers/palettes")
app.use("/palettes", palettesRouter)

const ingredientsRouter = require("./routers/ingredients")
app.use("/ingredients", ingredientsRouter)

const ingredientSpellingsRouter = require("./routers/ingredientspellings")
app.use("/ingredientspellings", ingredientSpellingsRouter)

// Listen for connections on specified port (default is port 4000)
const { PORT } = require("./config/constants")

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
