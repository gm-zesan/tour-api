const Tour = require("../models/Tour");

//create information
exports.saveTours = async (req, res, next) => {
    const newTour = new Tour(req.body);
    try {
        const savedTour = await newTour.save();
        res.status(200).json(savedTour);
    } catch (error) {
        next(error);
    }
};

//get all information with projection
exports.getAllTours = async (req, res, next) => {
    const queries = {};
    if (req.query.fields) {
        const fields = req.query.fields.split(",").join(" ");
        queries.fields = fields;
    }
    const fields = queries.fields ? queries.fields : {};

    if (req.query.sort) {
        const sortBy = req.query.sort.split(",").join(" ");
        queries.sortBy = sortBy;
    }
    const sortBy = queries.sortBy ? queries.sortBy : {};

    if (req.query.page) {
        const { page = 1, limit = 10 } = req.query;
        const skip = (page - 1) * parseInt(limit);
        queries.skip = skip;
        queries.limit = parseInt(limit);
    }
    try {
        const tours = await Tour.find({})
            .select(fields)
            .sort(sortBy)
            .limit(queries.limit)
            .skip(queries.skip);
        res.status(200).json(tours);
    } catch (error) {
        next(error);
    }
};

//get a information
exports.getATours = async (req, res, next) => {
    const id = req.params.id;
    try {
        await Tour.findByIdAndUpdate(
            id,
            { $inc: { viewCount: 1 } },
            { new: true }
        );
        const tour = await Tour.findById(id);

        res.status(200).json(tour);
    } catch (error) {
        next(error);
    }
};
