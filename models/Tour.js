const mongoose = require("mongoose");

const TourSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please provide a title for this product."],
            unique: [true, "Name must be unique"],
        },
        price: {
            type: Number,
            required: [true, "Please provide a price for this product."],
        },
        description: {
            type: String,
            required: [true, "Please provide a description for this product."],
        },
        city: {
            type: String,
            required: [true, "Please provide a city for this product."],
        },
        distance: {
            type: String,
        },
        rating: {
            type: Number,
            min: [0, "Rating can't be negative"],
            max: 5,
        },
        viewCount: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);
module.exports = mongoose.model("Tour", TourSchema);
