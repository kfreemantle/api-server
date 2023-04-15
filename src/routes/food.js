'use strict';

const express = require("express");
const router = express.Router();
const { Food } = require("../models");

// Route handler for creating a new food record (POST /food)
router.post("/", async (req, res) => {
  try {
    const newFood = await Food.create(req.body);
    res.status(201).json(newFood);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route handler for getting all food records (GET /food)
router.get("/", async (req, res) => {
  try {
    const allFood = await Food.findAll();
    res.status(200).json(allFood);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route handler for getting a single food record by ID (GET /food/:id)
router.get("/:id", async (req, res) => {
  try {
    const food = await Food.findByPk(req.params.id);
    if (food) {
      res.status(200).json(food);
    } else {
      res.status(404).json({ error: "Food not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route handler for updating a food record by ID (PUT /food/:id)
router.put("/:id", async (req, res) => {
  try {
    const [updatedRowsCount] = await Food.update(req.body, {
      where: { id: req.params.id },
    });

    if (updatedRowsCount) {
      const updatedFood = await Food.findByPk(req.params.id);
      res.status(200).json(updatedFood);
    } else {
      res.status(404).json({ error: "Food not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route handler for deleting a food record by ID (DELETE /food/:id)
router.delete("/:id", async (req, res) => {
  try {
    const deletedRowCount = await Food.destroy({
      where: { id: req.params.id },
    });

    if (deletedRowCount) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: "Food not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
