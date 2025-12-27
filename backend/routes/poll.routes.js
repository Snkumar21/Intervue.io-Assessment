const express = require("express");
const Poll = require("../models/Poll");

const router = express.Router();

// Create Poll (Teacher)
router.post("/create", async (req, res) => {
    try {
        const { question, options } = req.body;

        const poll = new Poll({
            question,
            options: options.map((op) => ({ text: op })),
        });

        await poll.save();
        res.status(201).json(poll);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get Active Poll (Student)
router.get("/latest", async (req, res) => {
    try {
        const poll = await Poll.findOne().sort({ createdAt: -1 });
        res.json(poll);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Vote (Student)
router.post("/vote/:pollId/:optionIndex", async (req, res) => {
    try {
        const { pollId, optionIndex } = req.params;

        const poll = await Poll.findById(pollId);
        poll.options[optionIndex].votes += 1;

        await poll.save();
        res.json(poll);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Results (Teacher)
router.get("/result/:pollId", async (req, res) => {
    try {
        const poll = await Poll.findById(req.params.pollId);
        res.json(poll);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;