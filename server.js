const express = require("express");
const dotenv = require("dotenv");
const color = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

//load env variables
dotenv.config({ path: "./config/config.env" });

//connect to database
connectDB();

//initilise express app
const app = express();

//Body parser that allows
app.use(express.json());

//route files
const users = require("./routes/users");

//Dev logging middleware
app.use(morgan("dev"));

//mount router
app.use("/api/users", users);

const PORT = process.env.PORT || 5000;

console.log(process.env.MONGO_URI);

app.listen(
  PORT,
  console.log(
    `server running on port ${PORT} in ${process.env.NODE_ENV} mode`.green
      .underline
  )
);

//Handle unhandled rejections
process.on("unhandledRejection", (error, promise) => {
  console.log(`Error : ${error.message}`);
  //close server
  server.close(() => process.exit(1));
});
