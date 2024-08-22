import React from "react";
import "./Css/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCalendarAlt,
  faListAlt,
  faUsers,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="main-content">
        <section className="intro">
          <h2>Discover and Engage with Exciting Events in your area</h2>
          <div className="buttons">
            <Link to="/find-events">
              <button className="find-event">Find your next event</button>
            </Link>
            <button className="publish-event">Publish an Event</button>
          </div>
        </section>
        <section className="steps-container">
          <div className="steps">
            <div className="step">
              <div className="circle">
                <FontAwesomeIcon icon={faUser} size="2x" />
              </div>
              <span>Register</span>
            </div>
            <FontAwesomeIcon icon={faArrowRight} size="1x" className="arrow" />
            <div className="step">
              <div className="circle">
                <FontAwesomeIcon icon={faCalendarAlt} size="2x" />
              </div>
              <span>Create Events</span>
            </div>
            <FontAwesomeIcon icon={faArrowRight} size="1x" className="arrow" />
            <div className="step">
              <div className="circle">
                <FontAwesomeIcon icon={faListAlt} size="2x" />
              </div>
              <span>Define Agendas</span>
            </div>
            <FontAwesomeIcon icon={faArrowRight} size="1x" className="arrow" />
            <div className="step">
              <div className="circle">
                <FontAwesomeIcon icon={faUsers} size="2x" />
              </div>
              <span>Monitor Attendees</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
