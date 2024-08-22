import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState({
    eventTitle: "",
    description: "",
    startDate: "",
    endDate: "",
    time: "",
    venue: "",
  });

  useEffect(() => {
    const fetchEvent = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          `http://localhost:5000/api/events/${id}`,
          {
            headers: { "x-auth-token": token },
          }
        );
        setEvent(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchEvent();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await axios.put(`http://localhost:5000/api/events/${id}`, event, {
        headers: { "x-auth-token": token },
      });
      navigate("/events"); // Redirect to events list or another appropriate page
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Edit Event</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="eventTitle"
            value={event.eventTitle}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={event.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Start Date:
          <input
            type="date"
            name="startDate"
            value={event.startDate}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          End Date:
          <input
            type="date"
            name="endDate"
            value={event.endDate}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Time:
          <input
            type="text"
            name="time"
            value={event.time}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Venue:
          <input
            type="text"
            name="venue"
            value={event.venue}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Update Event</button>
      </form>
    </div>
  );
};

export default EditEvent;
