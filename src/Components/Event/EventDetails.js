// src/components/EventDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Css/EventDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

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

  if (!event) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <div className="event-details-page">
        <div
          className="banner2"
          style={{
            backgroundImage: `url(${event.image || "/default-image.jpg"})`,
          }}
        >
          <div className="banner-content">
            <h1>{event.eventTitle}</h1>
            <div className="event-meta">
              <div className="event-date">
                <FontAwesomeIcon icon={faCalendar} className="fa-icon" />{" "}
                {new Date(event.startDate).toLocaleDateString()} at {event.time}
              </div>
              <div className="event-location">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-icon" />
                {event.venue}
              </div>
            </div>
            <button className="register-button">REGISTER</button>
          </div>
        </div>
        <div className="event-details2">
          <div className="event-description">
            <h2>Description</h2>
            <p>{event.description}</p>
          </div>
          <div className="event-organizer">
            <h2>Organizer</h2>
            <p>{event.organizerName}</p>
            <p>
              <FontAwesomeIcon icon={faPhone} className="fa-icon" />
              {event.organizerPhone}
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />
              {event.organizerEmail}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
