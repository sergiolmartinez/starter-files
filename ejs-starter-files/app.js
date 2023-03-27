//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello");
});

app.listen(process.env.PORT || port, function () {
  console.log("Server is running...");
});
