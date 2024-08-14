import React from "react";
import NavBar from "./navBar";
import Footer from "./footer";
import "../styling/calendar.style.css";

const Calendar = () => {
  return (
    <>
      <NavBar />
      <div className="calendar content">
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ25Am5Zz3tNMWYR7rcWGSJygFE2vlkALhKmVJ1_B7MsteA2dixDwtlsQQbaYgtYxpllQwsoKWqb?gv=true"
          style={{ border: 0 }}
          width="100%"
          height="600"
          frameborder="0"
          title="Google Calendar Appointment Scheduling"
        ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default Calendar;
