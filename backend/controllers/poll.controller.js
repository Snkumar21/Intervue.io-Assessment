const pollService = require("../services/poll.service");

exports.getActivePoll = async (req, res) => {
    try {
        const poll = await pollService.getActivePoll();
        res.json(poll);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getPollHistory = async (req, res) => {
    try {
        const polls = await pollService.getPollHistory();
        res.json(polls);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};