const pollService = require("../services/poll.service");

module.exports = (io, socket) => {
    socket.on("teacher:createPoll", async (data) => {
        try {
            const poll = await pollService.createPoll(data);
            io.emit("poll:started", poll);
        } catch (err) {
            socket.emit("error", err.message);
        }
    });

    socket.on("student:vote", async (data) => {
        try {
            const poll = await pollService.submitVote(data);
            io.emit("poll:update", poll);
        } catch (err) {
            socket.emit("error", err.message);
        }
    });
};