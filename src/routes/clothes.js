'use strict';

const express = require("express");
const router = express.Router();
const { Clothes } = require("../models");

// Route handler for creating a new clothes record (POST /clothes)
router.post("/", async (req, res) => {
  try {
    const newClothes = await Clothes.create(req.body);
    res.status(201).json(newClothes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route handler for getting all clothes records (GET /clothes)
router.get("/", async (req, res) => {
  try {
    const allClothes = await Clothes.findAll();
    res.status(200).json(allClothes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route handler for getting a single clothes record by ID (GET /clothes/:id)
router.get("/:id", async (req, res) => {
  try {
    const clothes = await Clothes.findByPk(req.params.id);
    if (clothes) {
      res.status(200).json(clothes);
    } else {
      res.status(404).json({ error: "Clothes not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route handler for updating a clothes record by ID (PUT /clothes/:id)
router.put("/:id", async (req, res) => {
  try {
    const [updatedRowsCount] = await Clothes.update(req.body, {
      where: { id: req.params.id },
    });

    if (updatedRowsCount) {
      const updatedClothes = await Clothes.findByPk(req.params.id);
      res.status(200).json(updatedClothes);
    } else {
      res.status(404).json({ error: "Clothes not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route handler for deleting a clothes record by ID (DELETE /clothes/:id)
router.delete("/:id", async (req, res) => {
  try {
    const deletedRowCount = await Clothes.destroy({
      where: { id: req.params.id },
    });

    if (deletedRowCount) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: "Clothes not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
