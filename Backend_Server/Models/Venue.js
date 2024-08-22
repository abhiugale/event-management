// models/Venue.js
const db = require('../Config/db');

const Venue = {
  create: (user_id, venueName, address, capacity, callback) => {
    const query = 'INSERT INTO venues (user_id, venueName, address, capacity) VALUES (?, ?, ?, ?)';
    db.query(query, [user_id, venueName, address, capacity], callback);
  }
};

module.exports = Venue;
