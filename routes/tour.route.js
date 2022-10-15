const express = require("express");
const {
    trendingTour,
    updateTour,
    cheapestTour,
} = require("../controllers/tour.controller");
const router = express.Router();

//CREATE
router.patch("/:id", updateTour);

//GET trending
router.get("/trending", trendingTour);

//GET chepest
router.get("/cheapest", cheapestTour);

module.exports = router;
