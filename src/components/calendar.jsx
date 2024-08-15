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
          width="85%"
          padding="10%"
          height="800px"
          frameborder="0"
        ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default Calendar;
