// src/components/FindEvent.js
import React, { useState, useEffect } from "react";
import "./Css/FindEvents.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Header from "./Header";
import axios from "axios";

const FindEvent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [events, setEvents] = useState([]);
  // Function to format date to YYYY-MM-DD
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${day}-${month}-${year}`;
  };
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

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredEvents = events.filter((event) =>
    event.eventTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="find-event-page">
        <div className="banner">
          <h1 className="heading">All Events</h1>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for events"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button>
            <FontAwesomeIcon icon={faSearch} /> Search
          </button>
        </div>
        <div className="events-container">
          {filteredEvents.map((event, index) => (
            <Link
              to={`/event-details/${event.id}`}
              key={index}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="event-card" key={index}>
                <div className="event-details">
                  <h2>{event.eventTitle}</h2>
                  <p>{event.description}</p>
                  <p>
                    <strong>Start Date: </strong>
                    {formatDate(event.startDate)}
                  </p>
                  <p>
                    <strong>End Date: </strong>
                    {formatDate(event.endDate)}
                  </p>
                  <p>
                    <strong>Time: </strong>
                    {event.time}
                  </p>
                  <p>
                    <strong>Location:</strong> {event.venue}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default FindEvent;
