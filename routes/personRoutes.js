const express = require("express");
const router = express.Router();
const Person = require("./../models/person");

router.post("/", async (req, res) => {
  try {
    const newPerson = await Person.create(req.body);
    res.status(201).json(newPerson);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const people = await Person.find().exec();
    res.status(200).json(people);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/:workType", async (req, res) => {
  try {
    const { workType } = req.params;
    if (["chef", "waiter", "manager"].includes(workType)) {
      const people = await Person.find({ work: workType }).exec();
      res.status(200).json(people);
    } else {
      res.status(404).json({ error: "Work type not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatePersonData = req.body;
    const response = await Person.findByIdAndUpdate(personId, updatePersonData, { new: true, runValidators: true });
    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }
    console.log("data updated");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;


