import React from "react";
import "./event.css";
import Header from "../../components/header/Header";

const Event = () => {
  return <div className="event">
    <Header title="EVENT" btntitle="New Event"/>
    <div className="eventWrapper">Event</div>
  </div>;
};

export default Event;
