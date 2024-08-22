const db = require("../Config/db");

const Event = {
  create: (
    user_id,
    eventTitle,
    description,
    startDate,
    endDate,
    time,
    venue,
    callback
  ) => {
    const query =
      "INSERT INTO events (user_id, eventTitle, description, startDate, endDate, time, venue) VALUES (?, ?, ?, ?, ?, ?, ?)";
    db.query(
      query,
      [user_id, eventTitle, description, startDate, endDate, time, venue],
      callback
    );
  },
  findById: (id, callback) => {
    const query = `
      SELECT events.*, users.fullName AS organizerName, users.email AS organizerEmail, users.phoneNumber AS organizerPhone
      FROM events
      JOIN users ON events.user_id = users.id
      WHERE events.id = ?
    `;
    db.query(query, [id], callback);
  },
  findByUserId: (user_id, callback) => {
    const query = "SELECT * FROM events WHERE user_id = ?";
    db.query(query, [user_id], callback);
  },
  update: (
    id,
    eventTitle,
    description,
    startDate,
    endDate,
    time,
    venue,
    callback
  ) => {
    const query =
      "UPDATE events SET eventTitle = ?, description = ?, startDate = ?, endDate = ?, time= ?, venue= ? WHERE id = ?";
    db.query(
      query,
      [eventTitle, description, startDate, endDate, time, venue, id],
      callback
    );
  },
  delete: (id, callback) => {
    const query = "DELETE FROM events WHERE id = ?";
    db.query(query, [id], callback);
  },
};

module.exports = Event;
