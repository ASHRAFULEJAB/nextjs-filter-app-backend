const express = require("express");
const Animal = require("../models/Animal");

const router = express.Router();

router.get("/", async (req, res) => {
  const animals = await Animal.find();
  res.json(animals);
});

router.post("/", async (req, res) => {
  const animal = new Animal(req.body);
  await animal.save();
  res.json(animal);
});

module.exports = router;
