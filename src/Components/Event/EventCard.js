import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faEye,
  faCalendar,
  faMapMarkerAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Sidebar from "../Dashboard/Sidebar";
import "./Css/EventCard.css";

// Function to format date to YYYY-MM-DD
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${day}-${month}-${year}`;
};

const EventCard = () => {
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
  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`http://localhost:5000/api/events/delete/${id}`, {
        headers: { "x-auth-token": token },
      });
      setEvents(events.filter((event) => event.id !== id));
      alert("Event Deleted Successfully...");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="create-event-div">
      <div className="create-event-sidebar">
        <Sidebar />
      </div>
      <div className="events-container">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <img src={event.image} alt="Event" className="event-image" />
            <div className="event-details">
              <div className="event-actions">
                <Link to={`/edit-event/${event.id}`} className="li">
                  <FontAwesomeIcon icon={faEdit} className="editIcon" />
                </Link>
                <button className="li" onClick={() => handleDelete(event.id)}>
                  <FontAwesomeIcon icon={faTrash} className="deleteIcon" />
                </button>
                <Link
                  to={`/event-details/${event.id}`}
                  key={index}
                  className="li"
                >
                  <FontAwesomeIcon icon={faEye} className="eyeIcon" />
                </Link>
              </div>
              <h3 className="title">{event.eventTitle}</h3>
              <p className="description">{event.description}</p>
              <p className="date-time">
                <FontAwesomeIcon icon={faCalendar} className="faIcon" />
                {formatDate(event.startDate)} to {formatDate(event.endDate)}
              </p>
              <p className="date-time">
                <FontAwesomeIcon icon={faClock} className="faIcon" />
                {event.time}
              </p>
              <p className="date-time">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="faIcon" />
                {event.venue}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCard;
