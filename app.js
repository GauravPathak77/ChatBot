const express = require("express");
const axios = require("axios");
const app = express();
const key = require("./key");
const path = require("path");
const ejs = require("ejs");
require("env").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {response: null});
});

app.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await key(prompt, process.env.API);
    console.log(response);
    res.render("index", {response: response});
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
