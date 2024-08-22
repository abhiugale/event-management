const db = require("../Config/db");

const User = {
  create: (fullName, email, phoneNumber, password, country, callback) => {
    const query =
      "INSERT INTO users (fullName, email, phoneNumber, password, country) VALUES (?, ?, ?, ?, ?)";
    db.query(
      query,
      [fullName, email, phoneNumber, password, country],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
      }
    );
  },
  findByEmail: (email, callback) => {
    const query = "SELECT * FROM users WHERE email = ?";
    db.query(query, [email], callback);
  },
};

module.exports = User;
