const express = require("express");
const {
    getATours,
    saveTours,
    getAllTours,
} = require("../controllers/tours.controller");

const router = express.Router();

//CREATE
router.post("/", saveTours);

//GET One
router.get("/:id", getATours);

//GET ALL
router.get("/", getAllTours);

module.exports = router;