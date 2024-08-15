const express = require("express")

const app = express()

//Routes imports
const product = require("./routes/productRoute")

app.use("/api/v1", product)


module.exports = app