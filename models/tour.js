const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tourSchema = new Schema({
    country: String,
    days: Number,
    priceAdult: Number,
    priceKid: Number,
    isAvia: Boolean,
    isHot: Boolean
});

const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;