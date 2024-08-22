// src/components/CreateEvent.js
import React, { useState } from "react";
import "./Css/CreateEvent.css";
import Sidebar from "../Dashboard/Sidebar";
import axios from "axios";
import { format, parseISO } from "date-fns";

const CreateEvent = () => {
  const [eventTitle, setEventTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [time, setTime] = useState("");
  // const [image, setImage] = useState(null);
  const [venue, setVenue] = useState("");


  const handleCreateEvent = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("No token found. Please login.");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/api/events/create",
        { eventTitle, description, startDate, endDate, time, venue },
        { headers: { "x-auth-token": token } }
      );
      console.log("Event created");
      alert("Event created");

    } catch (err) {
      console.error(err);
      alert("Event creation failed", err);
    }
  };

  // const handleImageChange = (e) => {
  //   setImage(e.target.files[0]);
  // };

  return (
    <div className="create-event-div">
      <div className="create-event-sidebar">
        <Sidebar />
      </div>
      <div className="create-event">
        <h2>Create Event</h2>
        <form onSubmit={handleCreateEvent}>
          <label>Event Title *</label>
          <input
            type="text"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            required
          />

          <label>Description *</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>

          <label>Dates *</label>
          <div className="date-inputs">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>

          <label>Timing *</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />

          {/* <label>Banner Image *</label>
          <div className="image-upload">
            <input
              type="file"
              onChange={handleImageChange}
              placeholder="+Upload"
              required
            />
          </div> */}

          <label>Venue *</label>
          <select
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            required
          >
            <option value="" disabled>
              Select a venue
            </option>
            <option value="Venue 1">Venue 1</option>
            <option value="Venue 2">Venue 2</option>
            {/* Add more options as needed */}
          </select>

          <button type="submit">Create Event</button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;

// import React, { useState } from "react";
// import axios from "axios";

// const CreateEvent = () => {
// const [name, setName] = useState("");
// const [description, setDescription] = useState("");
// const [date, setDate] = useState("");
// const [location, setLocation] = useState("");

// const handleCreateEvent = async () => {
//   const token = localStorage.getItem("token");
//   if (!token) {
//     alert("No token found. Please login.");
//     return;
//   }

//   try {
//     await axios.post(
//       "http://localhost:3001/api/events/create",
//       { name, description, date, location },
//       { headers: { "x-auth-token": token } }
//     );
//     alert("Event created");
//   } catch (err) {
//     console.error(err);
//     alert("Event creation failed",err);
//   }
// };

//   return (
//     <div>
//       <h2>Create Event</h2>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Event Name"
//       />
//       <input
//         type="text"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         placeholder="Description"
//       />
//       <input
//         type="datetime-local"
//         value={date}
//         onChange={(e) => setDate(e.target.value)}
//       />
//       <input
//         type="text"
//         value={location}
//         onChange={(e) => setLocation(e.target.value)}
//         placeholder="Location"
//       />
//       <button onClick={handleCreateEvent}>Create Event</button>
//     </div>
//   );
// };

// export default CreateEvent;
