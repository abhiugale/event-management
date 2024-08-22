import React, { useState, useEffect } from "react";
import "./Css/Header.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCalendarPlus,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { jwtDecode } from "jwt-decode";  // Use named import

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      setFullName(decoded.fullName);
    }
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo">
          Event Manager
        </Link>
      </div>
      <nav>
        <Link to="/find-events">
          <FontAwesomeIcon icon={faSearch} className="fa-icon" /> Find Events
        </Link>
        <Link to="/create-event">
          <FontAwesomeIcon icon={faCalendarPlus} className="fa-icon" /> Create
          Events
        </Link>
      </nav>
      <div className="profile" onClick={toggleDropdown}>
        {fullName && (
          <div className="avatar">{fullName.charAt(0).toUpperCase()}</div>
        )}
        <span>{fullName}</span>
        <FontAwesomeIcon icon={faCaretDown} className="caret" />
        {dropdownOpen && (
          <div className="dropdown">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="#">Logout</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
