const express = require("express");
const app = express();

const errorMiddleware = require("./middlewares/error");

// Middleware to parse JSON data
app.use(express.json());

// Routes imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");

// Use routes
app.use("/api/v1", product);
app.use("/api/v1", user);

//Use middleware for error
app.use(errorMiddleware);

module.exports = app;
