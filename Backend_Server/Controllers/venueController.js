// controllers/venueController.js
const Venue = require('../Models/Venue');

exports.createVenue = (req, res) => {
  const { venueName, address, capacity } = req.body;
  const user_id = req.user.id; // Assuming user_id is used for authentication

  Venue.create(user_id, venueName, address, capacity, (err, results) => {
    if (err) return res.status(500).send('Server error.');
    res.status(200).send('Venue created successfully.');
  });
};
