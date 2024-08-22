const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../Models/User");

exports.register = (req, res) => {
  const { fullName, email, phoneNumber, password, country } = req.body;

  User.findByEmail(email, (err, results) => {
    if (results.length > 0) return res.status(400).send("User already exists.");
    // console.log(fullName, email, phoneNumber, password, country );
    const hashedPassword = bcrypt.hashSync(password, 8);
    User.create(
      fullName,
      email,
      phoneNumber,
      hashedPassword,
      country,
      (err, results) => {
        if (err) return res.status(500).send("Server error.");
        res.status(200).send("User Registered Successfully.");
      }
    );
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  User.findByEmail(email, (err, results) => {
    if (results.length === 0)
      return res.status(400).send("Invalid email or password.");

    const user = results[0];
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword)
      return res.status(400).send("Invalid email or password.");

    const token = jwt.sign(
      {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        country: user.country,
      },
      "secret",
      { expiresIn: "1h" }
    );
    res.status(200).send({ auth: true, token });
  });
};
