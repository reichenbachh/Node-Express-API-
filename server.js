const express = require("express");
const dotenv = require("dotenv");
const color = require("colors");

//load env variables
dotenv.config({ path: "./config/config.env" });

//initilise express app
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `server running on port ${PORT} in ${process.env.NODE_ENV} mode`.green
      .underline
  )
);
