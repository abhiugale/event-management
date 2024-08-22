const Event = require("../Models/Event");

exports.createEvent = (req, res) => {
  const { eventTitle, description, startDate, endDate, time, venue } = req.body;
  const user_id = req.user.id;
  Event.create(
    user_id,
    eventTitle,
    description,
    startDate,
    endDate,
    time,
    venue,

    (err, results) => {
      if (err) return res.status(500).send("Server error.");
      res.status(200).send("Event created.");
    }
  );
};

exports.getEvents = (req, res) => {
  const user_id = req.user.id;

  Event.findByUserId(user_id, (err, results) => {
    if (err) return res.status(500).send("Server error.");
    res.status(200).send(results);
  });
};
exports.getEventById = (req, res) => {
  const { id } = req.params;

  Event.findById(id, (err, results) => {
    if (err) return res.status(500).send("Server error.");
    if (results.length === 0) return res.status(404).send("Event not found.");
    res.status(200).send(results[0]);
  });
};

exports.updateEvent = (req, res) => {
  const { id, eventTitle, description, startDate, endDate, time, venue } =
    req.body;

  Event.update(
    id,
    eventTitle,
    description,
    startDate,
    endDate,
    time,
    venue,
    (err, results) => {
      if (err) return res.status(500).send("Server error.");
      res.status(200).send("Event updated.");
    }
  );
};

exports.deleteEvent = (req, res) => {
  const { id } = req.body;

  Event.delete(id, (err, results) => {
    if (err) return res.status(500).send("Server error.");
    res.status(200).send("Event deleted.");
  });
};
