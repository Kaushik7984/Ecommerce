const express = require("express");
const app = express();
const cookieParser = require("cookie-parser")

const errorMiddleware = require("./middlewares/error");

// Middleware to parse JSON data
app.use(express.json());
app.use(cookieParser())

// Routes imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute")

// Use routes
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);

//Use middleware for error
app.use(errorMiddleware);

module.exports = app;
