// src/components/DashboardCards.js
import React from "react";
import "./Css/DashboardCards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faClipboardList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const DashboardCards = () => {
  return (
    <>
      <p style={{ fontSize: "20px" }}>Events You are managing </p>
      <div className="dashboard-cards">
        <div className="card">
          <div className="card-icon red">
            <FontAwesomeIcon icon={faCalendarAlt} size="2x"/>
          </div>
          <div className="card-content">
          <p><strong>1</strong></p>
          <p style={{marginTop: "10px"}}>Past Events</p>
          </div>
        </div>
        <div className="card">
          <div className="card-icon yellow">
            <FontAwesomeIcon icon={faCalendarAlt} size="2x"/>
          </div>
          <div className="card-content">
          <p><strong>0</strong></p>
          <p style={{marginTop: "10px"}}>Upcoming Events</p>
          </div>
        </div>
        <div className="card">
          <div className="card-icon pink">
            <FontAwesomeIcon icon={faClipboardList} size="2x"/>
          </div>
          <div className="card-content">
            <p><strong>1</strong></p>
            <p style={{marginTop: "10px"}}>All Events</p>
          </div>
        </div>
        <div className="card">
          <div className="card-icon green">
            <FontAwesomeIcon icon={faUser} size="2x"/>
          </div>
          <div className="card-content">
          <p><strong>0</strong></p>
          <p style={{marginTop: "10px"}}>Registered Users</p>
          </div>
        </div>
      </div>
      <>
      <p style={{ fontSize: "20px" }}>Events You Registered For </p>
      <div className="dashboard-cards2">
        <div className="card2">
          <div className="card-icon red">
            <FontAwesomeIcon icon={faCalendarAlt} size="2x" />
          </div>
          <div className="card-content">
          <p><strong>1</strong></p>
          <p style={{marginTop: "10px"}}>Past Events</p>
          </div>
        </div>
        <div className="card2">
          <div className="card-icon yellow">
            <FontAwesomeIcon icon={faCalendarAlt} size="2x"/>
          </div>
          <div className="card-content">
          <p><strong>0</strong></p>
          <p style={{marginTop: "5px"}}>Upcoming Events</p>
          </div>
        </div>
      </div>
      </>
    </>
  );
};

export default DashboardCards;
