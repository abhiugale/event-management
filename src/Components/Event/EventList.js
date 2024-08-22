import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Css/EventCard.css";

const EventList = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          "http://localhost:5000/api/events/all",
          {
            headers: { "x-auth-token": token },
          }
        );
        setEvents(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchEvents();
  }, []);

  const handleEdit = () => {
    navigate("/edit-event");
  };
  const handleDelete = () => {
    // navigate("/edit-event");
  };
  return (
    <div>
      <h2>My Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <div className="event-card">
              {/* <img src={event.image} alt={event.name} className="event-image" /> */}
              <h2 className="event-name">{event.name}</h2>
              <p className="event-description">{event.description}</p>
              <p className="event-date">{event.date}</p>
              <p className="event-time">{event.time}</p>
              <p className="event-location">{event.location}</p>
              <div className="event-buttons">
                <button className="edit-event-button" onClick={handleEdit}>
                  Edit Event
                </button>
                <button className="delete-event-button" onClick={handleDelete}>Delete Event</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
