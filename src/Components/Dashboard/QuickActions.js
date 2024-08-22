// src/components/QuickActions.js
import React from "react";
import "./Css/QuickActions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Link } from "react-router-dom";

const QuickActions = () => {
  return (
    <>
      <p style={{ fontSize: "20px" }}>Quick Actions</p>
      <div className="quick-actions">
        <Link to="/create-event" className="quick-link">
          <div className="quick-action">
            <div className="action-icon">
              <FontAwesomeIcon icon={faPlusSquare} />
            </div>
            <div className="action-content">
              <p>Create Event </p>
            </div>
          </div>
        </Link>
        <Link to="/create-venue" className="quick-link">
          <div className="quick-action">
            <div className="action-icon">
              <FontAwesomeIcon icon={faPlusSquare} />
            </div>
            <div className="action-content">
              <p>Create Venue</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default QuickActions;
