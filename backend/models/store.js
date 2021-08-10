const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
    name: String,
    address: String,
    city: String,
    bdStatus: Boolean,
});

const store = new mongoose.model("store", storeSchema);
module.exports = store;