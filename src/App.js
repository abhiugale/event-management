import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import CreateEvent from "./Components/Event/CreateEvent";
import CreateVenue from "./Components/Event/CreateVenue";
// import EventList from "./Components/Event/EventList";
import EditEvent from "./Components/Event/EditEvent";
import Home from "./Components/Event/Home";
import Header from "./Components/Event/Header";
import FindEvent from "./Components/Event/FindEvents";
import EventDetails from "./Components/Event/EventDetails";
import Dashboard from "./Components/Dashboard/Dashboard";
import Overview from "./Components/Dashboard/Overview";
import PrivateRoute from "./Components/PrivateRoute";
import EventCard from "./Components/Event/EventCard";
const App = () => {
  return (
    <Router>
      <div>
        <div className="App"></div>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-event" element={<CreateEvent />} />
            <Route path="/create-venue" element={<CreateVenue />} />
            <Route path="/find-events" element={<FindEvent />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/event-card" element={<EventCard />} />
            <Route path="/edit-event/:id" element={<EditEvent />} />
            <Route path="/event-details/:id" element={<EventDetails />} />

            </Routes>
        </div>
      </div>
    </Router>
  );
  // const App = () => {
  //   return (
  // <Router>
  //   <div>
  //     <h1>Event Management System</h1>
  //     <nav>
  //       <Link to="/register">Register</Link>
  //       <Link to="/login">Login</Link>
  //       <Link to="/create-event">Create Event</Link>
  //       <Link to="/events">My Events</Link>
  //     </nav>
  //     <Routes>
  //       <Route path="/register" element={<Register />} />
  //       <Route path="/login" element={<Login />} />
  //       <Route path="/create-event" element={<CreateEvent />} />
  //       <Route path="/events" element={<EventList />} />
  //       <Route path="/edit-event" element={<EditEvent />} />
  //     </Routes>
  //   </div>
  // </Router>
  //   );
};

export default App;
