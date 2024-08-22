import React, { useState } from "react";
import "./Css/Register.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [country, setCountry] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          fullName,
          email,
          phoneNumber,
          password,
          country,
        }
      );
      alert("User registered successfully");
      console.log(response.data);
    } catch (err) {
      if (err.response) {
        // Server responded with a status other than 200 range
        console.error("Server Error:", err.response.data);
        alert(`Registration failed: ${err.response.data.message}`);
      } else if (err.request) {
        // Request was made but no response received
        console.error("Network Error:", err.request);
        alert("Network error. Please try again later.");
      } else {
        // Something else happened while setting up the request
        console.error("Error:", err.message);
        alert(`Error: ${err.message}`);
      }
    }
  };

  return (
    <div className="main-container">
      <div className="register-container">
        <h1>Welcome to Event Manager</h1>
        <p>Enter the details below to create an account</p>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="name">Name* </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email* </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="abc@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number* </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="Your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="form-group password-group">
            <label htmlFor="password">Password* </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              onClick={togglePasswordVisibility}
              className="password-toggle-icon"
            />
          </div>
          <div className="form-group password-group">
            <label htmlFor="confirm-password">Confirm Password*</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirm-password"
              name="confirm-password"
              required
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <FontAwesomeIcon
              icon={showConfirmPassword ? faEyeSlash : faEye}
              onClick={toggleConfirmPasswordVisibility}
              className="password-toggle-icon"
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country* </label>
            <select
              id="country"
              name="country"
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Select your country</option>
              <option value="India">India</option>
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Australia">Australia</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
              <option value="China">China</option>
              <option value="Japan">Japan</option>
              <option value="South Korea">South Korea</option>
              <option value="Brazil">Brazil</option>
              <option value="Mexico">Mexico</option>
              <option value="South Africa">South Africa</option>
            </select>
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
        <p className="signup-text">
          already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

// import React, { useState } from "react";
// import axios from "axios";

// const Register = () => {
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");

// const handleRegister = async () => {
//   try {
//     await axios.post("http://localhost:3001/api/auth/register", {
//       email,
//       password,
//     });
//     alert("User registered");
//   } catch (err) {
//     console.error(err);
//   }
// };

//   return (
//     <div>
//       <h2>Register</h2>
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//       />
//       <button onClick={handleRegister}>Register</button>
//     </div>
//   );
// };

// export default Register;
