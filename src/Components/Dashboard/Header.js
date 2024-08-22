// src/components/Header.js
import React from 'react';
import './Css/DashHeader.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <h1>Welcome, Abhishek</h1>
      <input type="text" placeholder="Search" />
      <div className="header-icons">
        <FontAwesomeIcon icon={faBell} />
      </div>
    </div>
  );
};

export default Header;
