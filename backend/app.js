const express = require("express");
const app = express();
const cookieParser = require("cookie-parser")
const dotenv = require("dotenv");
const cors = require('cors');


const errorMiddleware = require("./middlewares/error");

//config
dotenv.config({ path: "backend/config/config.env" });

app.use(cors({
  origin: process.env.FRONTEND_URL,  
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  credentials: true, 
}));

app.options('*', cors()); 

console.log(process.env.FRONTEND_URL)


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
