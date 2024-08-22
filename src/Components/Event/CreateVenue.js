// src/components/CreateEvent.js
import React, { useState } from "react";
import "./Css/CreateEvent.css";
import Sidebar from "../Dashboard/Sidebar";
import axios from "axios";
const CreateEvent = () => {
  const [venueName, setVenueName] = useState("");
  const [address, setAddress] = useState("");
  const [capacity, setCapacity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      alert("No token found. Please login.");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/api/venues/create",
        { venueName, address, capacity },
        { headers: { "x-auth-token": token } }
      );
     
      alert("Venue created successfully!");
      // Optionally reset form fields
      setVenueName("");
      setAddress("");
      setCapacity("");
    } catch (err) {
      console.log(err);
      alert("Venue creation failed.");
    }
  };

  return (
    <div className="create-event-div">
      <div className="create-event-sidebar">
        <Sidebar />
      </div>
      .
      <div className="create-event">
        <h2>Create Venue</h2>
        <form onSubmit={handleSubmit}>
          <label>Venue Name *</label>
          <input
            type="text"
            value={venueName}
            onChange={(e) => setVenueName(e.target.value)}
            required
          />
          <label>Address *</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <label>Capacity *</label>
          <input
            type="text"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            required
          />
          <button type="submit">Create Venue</button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
