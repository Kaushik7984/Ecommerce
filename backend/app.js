const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

const errorMiddleware = require("./middlewares/error");

//config
dotenv.config({ path: "config/config.env" });

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.options("*", cors());

// console.log(process.env.FRONTEND_URL);

// Middleware to parse JSON data
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// Routes imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");

// Use routes
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);

//Use middleware for error
app.use(errorMiddleware);

module.exports = app;
