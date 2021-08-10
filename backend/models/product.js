const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    code: String,
    description: String,
    date: { type: Date, default: Date.now },
    bdStatus: Boolean,
});

const product = new mongoose.model("product", productSchema);
module.exports = product;