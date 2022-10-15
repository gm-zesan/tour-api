const Tour = require("../models/Tour");

//update information
exports.updateTour = async (req, res, next) => {
    const id = req.params.id;
    try {
        const updatedTour = await Tour.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedTour);
    } catch (error) {
        next(error);
    }
};

//get trending information
exports.trendingTour = async (req, res, next) => {
    try {
        const trendingTour = await Tour.find({})
            .sort({ viewCount: -1 })
            .limit(3);
        res.status(200).json(trendingTour);
    } catch (error) {
        next(error);
    }
};

//get chepest information
exports.cheapestTour = async (req, res, next) => {
    try {
        const cheapestTour = await Tour.find({}).sort({ price: 1 }).limit(3);
        res.status(200).json(cheapestTour);
    } catch (error) {
        next(error);
    }
};
