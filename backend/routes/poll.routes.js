const express = require("express");
const router = express.Router();
const pollController = require("../controllers/poll.controller");

router.get("/active", pollController.getActivePoll);
router.get("/history", pollController.getPollHistory);

module.exports = router;