const Poll = require("../models/Poll");
const Vote = require("../models/Vote");

class PollService {

    async createPoll(data) {
        const activePoll = await Poll.findOne({ isActive: true });
        if (activePoll) throw new Error("Poll already active");

        return await Poll.create({
            ...data,
            startTime: new Date()
        });
    }

    async getActivePoll() {
        return await Poll.findOne({ isActive: true });
    }

    async submitVote({ pollId, studentId, optionIndex }) {
        const poll = await Poll.findById(pollId);
        if (!poll || !poll.isActive) throw new Error("Poll not active");

        await Vote.create({ pollId, studentId, optionIndex });
        poll.options[optionIndex].votes += 1;
        await poll.save();

        return poll;
    }

    async endPoll(pollId) {
        return await Poll.findByIdAndUpdate(
            pollId,
            { isActive: false },
            { new: true }
        );
    }
}

module.exports = new PollService();