const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Listing Name is Required"],
        minlength: [4, "Listing needs at least 4 characters"],
    },
    price: {
        type: Number,
        required: [true, "Price must be added"]
    },
    description: {
        type: String,
        required: [true, "Description must be added"]
    },
    image: {
        type: String,
        required: true

    },

});

module.exports = mongoose.model("Product", ProductSchema);