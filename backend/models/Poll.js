const mongoose = require("mongoose");

const optionSchema = new mongoose.Schema({
    text: String,
    votes: { type: Number, default: 0 }
});

const pollSchema = new mongoose.Schema({
    question: String,
    options: [optionSchema],
    duration: Number,
    startTime: Date,
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model("Poll", pollSchema);