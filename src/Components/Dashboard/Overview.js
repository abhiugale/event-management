// src/components/MainContent.js
import React from "react";
import DashboardCards from "./DashboardCards";
import QuickActions from "./QuickActions";
import Sidebar from "./Sidebar";
import "./Css/Overview.css";

const Overview = () => {
  return (
    <div className="create-event-div">
      <div className="create-event-sidebar">
      </div>
      <div className="main-content">
        <DashboardCards />
        <QuickActions />
      </div>
    </div>
  );
};

export default Overview;
