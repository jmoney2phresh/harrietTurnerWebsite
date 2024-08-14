import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/landingPage";
import ScrollToTop from "./components/scrollToTop";
import HomePage from "./components/homePage";
import Calendar from "./components/calendar";
import Resources from "./components/resources";
import ProtectedRoute from "./components/protectedRoute";
import Login from "./components/login";
import SuzukiMethod from "./components/suzukiMethod";
import FAQ from "./components/faqs";
import AboutHarriet from "./components/aboutHarriet";
import Contact from "./components/contact";

function App() {
  const [showLandingPage, setShowLandingPage] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (!hasVisited) {
      setShowLandingPage(true);
    }
  }, []);

  const handleEnterSite = () => {
    sessionStorage.setItem("hasVisited", "true");
    setShowLandingPage(false);
  };

  return (
    <Router>
      <ScrollToTop />
      {showLandingPage && <LandingPage onEnterSite={handleEnterSite} />}
      {!showLandingPage && (
        <Routes className="content">
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/suzukiMethod" element={<SuzukiMethod />} />
          <Route path="/login" element={<Login />} />
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/aboutharriet" element={<AboutHarriet />} />
          <Route
            path="/resources"
            element={
              <ProtectedRoute>
                <Resources />
              </ProtectedRoute>
            }
          />
        </Routes>
      )}
    </Router>
  );
}

export default App;
