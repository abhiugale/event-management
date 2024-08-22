// src/App.js
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Overview from './Overview';
import './Css/Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main">
        <Header />
      </div>
      <div className='overview'>
      <Overview />
      </div>
    </div>
  );
}

export default Dashboard;
