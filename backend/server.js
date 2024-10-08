const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");


//config
dotenv.config({ path: "backend/config/config.env" });

//Handling Uncaught Exception 
process.on("uncaughtException", (err) =>{
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Uncaught Exception`);

  process.exit(1)
})


//connect to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`server is working on http://localhost:${process.env.PORT}`);
});


//unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
