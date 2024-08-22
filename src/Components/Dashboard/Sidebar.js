// src/components/Sidebar.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faThumbsUp,
  faHome,
  faClipboardList,
  faCog,
  faEarth,
  faBullseye,
  faCheck,
  faSignOutAlt,
  faCodeBranch,
  faCalendarPlus,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Css/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-main">
        <div className="sidebar-logo">
          <h3>Event Manager</h3>
        </div>
        <ul className="sidebar-menu">
          <Link to="/dashboard" className="li">
            <FontAwesomeIcon icon={faHome} className="fa-icon" /> Overview
          </Link>
          <div className="sidebar-submenu">
            <FontAwesomeIcon icon={faClipboardList} className="fa-icon" />{" "}
            Events
            <ul>
              <Link to="/create-event" className="li">
                <FontAwesomeIcon icon={faCalendarPlus} className="fa-icon" />{" "}
                Create Event
              </Link>
              <Link to="/#" className="li">
                <FontAwesomeIcon icon={faCodeBranch} className="fa-icon" />{" "}
                Create Event Track
              </Link>
              <Link to="/create-venue" className="li">
                <FontAwesomeIcon icon={faHome} className="fa-icon" /> Create
                Venue
              </Link>
              <Link to="/event-card" className="li">
                <FontAwesomeIcon icon={faCalendarAlt} className="fa-icon" /> My
                Events
              </Link>
              <Link to="/#" className="li">
                <FontAwesomeIcon icon={faCheck} className="fa-icon" />{" "}
                Registered Events
              </Link>

              <div className="sidebar-submenu">
                <FontAwesomeIcon icon={faThumbsUp} className="fa-icon" />{" "}
                Recommended
                <ul>
                  <Link to="/#" className="li">
                    <FontAwesomeIcon icon={faBullseye} className="fa-icon" />
                    Local
                  </Link>
                  <Link to="/#" className="li">
                    <FontAwesomeIcon icon={faEarth} className="fa-icon" />
                    International
                  </Link>
                </ul>
              </div>
            </ul>
          </div>

          <Link to="/#" className="li">
            <FontAwesomeIcon icon={faCog} className="fa-icon" /> Settings
          </Link>
          <Link to="/#" className="li">
            <FontAwesomeIcon icon={faSignOutAlt} className="fa-icon" /> Logout
          </Link>
        </ul>
        <div className="sidebar-user">
          <div className="user-info">
            <div className="user-initials">AU</div>
            <div className="user-details">
              <p className="user-details-text">Abhishek Ugale</p>
              <p style={{ fontSize: "10px" }}>abhiugale2002@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
