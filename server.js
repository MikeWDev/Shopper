const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

//DB connection with mongodb

mongoose.connect(
  "mongodb+srv://mkocikdev:ecommerce@e-commerce.ae9se8m.mongodb.net/e-commerce"
);
// API creation
const port = 4000;
app.listen(port, (error) => {
  if (!error) {
    console.log("Server running");
  } else {
    console.log("Error: " + error);
  }
});

app.get("/", (req, res) => {});
