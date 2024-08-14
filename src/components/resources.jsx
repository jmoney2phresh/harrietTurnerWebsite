import React, { useState } from "react";
import NavBar from "./navBar";
import Footer from "./footer";
import "../styling/resources.style.css";

const Resources = () => {
  const [isBeginnerOpen, setIsBeginnerOpen] = useState(false);
  const [isIntermediateOpen, setIsIntermediateOpen] = useState(false);
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [isMusicOpen, setIsMusicOpen] = useState(false);
  const [isParentsOpen, setIsParentsOpen] = useState(false);

  const toggleBeginner = () => setIsBeginnerOpen(!isBeginnerOpen);
  const toggleIntermediate = () => setIsIntermediateOpen(!isIntermediateOpen);
  const toggleAdvanced = () => setIsAdvancedOpen(!isAdvancedOpen);
  const toggleMusic = () => setIsMusicOpen(!isMusicOpen);
  const toggleParents = () => setIsParentsOpen(!isParentsOpen);

  return (
    <>
      <NavBar />

      <div className="resources content">
        <div className="dropDowns">
          <h1>Resources</h1>
          <div className="folder">
            <h2 onClick={toggleBeginner} className="folder-header">
              Beginner {isBeginnerOpen ? "▲" : "▼"}
            </h2>
            {isBeginnerOpen && (
              <ul>
                <li>
                  <a href="/path/to/file1.pdf" download>
                    Beginner Lesson 1
                  </a>
                </li>
                <li>
                  <a href="/path/to/file2.pdf" download>
                    Beginner Lesson 2
                  </a>
                </li>
                <li>
                  <a href="/path/to/file3.pdf" download>
                    Beginner Practice Sheet
                  </a>
                </li>
              </ul>
            )}
          </div>
          <div className="folder">
            <h2 onClick={toggleIntermediate} className="folder-header">
              Intermediate {isIntermediateOpen ? "▲" : "▼"}
            </h2>
            {isIntermediateOpen && (
              <ul>
                <li>
                  <a href="/path/to/file4.pdf" download>
                    Intermediate Lesson 1
                  </a>
                </li>
                <li>
                  <a href="/path/to/file5.pdf" download>
                    Intermediate Lesson 2
                  </a>
                </li>
                <li>
                  <a href="/path/to/file6.pdf" download>
                    Intermediate Practice Sheet
                  </a>
                </li>
              </ul>
            )}
          </div>
          <div className="folder">
            <h2 onClick={toggleAdvanced} className="folder-header">
              Advanced {isAdvancedOpen ? "▲" : "▼"}
            </h2>
            {isAdvancedOpen && (
              <ul>
                <li>
                  <a href="/path/to/file7.pdf" download>
                    Advanced Lesson 1
                  </a>
                </li>
                <li>
                  <a href="/path/to/file8.pdf" download>
                    Advanced Lesson 2
                  </a>
                </li>
                <li>
                  <a href="/path/to/file9.pdf" download>
                    Advanced Practice Sheet
                  </a>
                </li>
              </ul>
            )}
          </div>
          <div className="folder">
            <h2 onClick={toggleMusic} className="folder-header">
              Music {isMusicOpen ? "▲" : "▼"}
            </h2>
            {isMusicOpen && (
              <ul>
                <li>
                  <a href="/path/to/file1.pdf" download>
                    Music Lesson 1
                  </a>
                </li>
                <li>
                  <a href="/path/to/file2.pdf" download>
                    Music Lesson 2
                  </a>
                </li>
                <li>
                  <a href="/path/to/file3.pdf" download>
                    Music Practice Sheet
                  </a>
                </li>
              </ul>
            )}
          </div>
          <div className="folder">
            <h2 onClick={toggleMusic} className="folder-header">
              Parents & Guardians {isParentsOpen ? "▲" : "▼"}
            </h2>
            {isParentsOpen && (
              <ul>
                <li>
                  <a href="/path/to/file1.pdf" download>
                    Supporting the Suzuki Method
                  </a>
                </li>
                <li>
                  <a href="/path/to/file2.pdf" download>
                    Positive reinforcement
                  </a>
                </li>
                <li>
                  <a href="/path/to/file3.pdf" download>
                    At home exercises
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Resources;
