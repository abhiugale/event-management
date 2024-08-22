// routes/venueRoutes.js
const express = require("express");
const router = express.Router();
const venueController = require("../Controllers/venueController");
const auth = require("../Middleware/Auth");

router.post("/create", auth, venueController.createVenue);

module.exports = router;
