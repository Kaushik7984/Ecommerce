const mongoose = require("mongoose");

const connectDatabase = () => {
  let dbURI;
  
  if (process.env.NODE_ENV === "development") {
    dbURI = process.env.DB_URI_D; // Use local MongoDB URI for development
  } else {
    dbURI = process.env.DB_URI_P; // Use MongoDB URI from environment variables for production
  }

  console.log(`Environment: ${process.env.NODE_ENV}`);
  console.log(`DB_URI: ${dbURI}`);

  mongoose
    .connect(dbURI)
    .then((data) => {
      console.log(`MongoDB connected with server: ${data.connection.host}`);
    })
    .catch((error) => {
      console.error("Database connection error:", error.message);
      process.exit(1); // Exit the process with failure
    });
};

module.exports = connectDatabase;
