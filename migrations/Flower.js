const { Schema, model } = require("mongoose");

const Flower = new Schema({
    name: { type: String, required: true, unique: true },
    price: { type: String, required: true },
    sale: { type: String, required: false, default: 0 },
    image: { type: String, required: true },
    // weight: { type: String, required: true },
    status: { type: String, required: true },
    category: { type: String, required: true },
    description: {type: String, required: true},
    review: {type: Schema.Types.Mixed, required: false}
});

module.exports = model("Flower", Flower);
