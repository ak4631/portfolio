import React from "react";
import "./pro.css";
import gp from "./images/gp.png";
import urlShot from "./images/UrlShort.png";
import weatherApp from "./images/Weather_App.png";
import magma from "./images/Magma.png";
import timeline from "./images/Timeline.png";
import headlines from "./images/Healines.png";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch, faCircle } from "@fortawesome/free-solid-svg-icons";
const Project = () => {
  return (
    <div>
      <section className="project_section" id="project_area">
        <h1>My Projects</h1>
        <div className="project_area">
          <div className="project_details">
            <div className="left_pro">
              <img src={gp} alt="Project_image"></img>
            </div>
            <div className="right_pro">
              <h2>Group Notes</h2>
              <p>
                Created this Project on <u>HTML,JS and PHP</u>
              </p>
              <div className="project_links">
                <Link to="https://github.com/ak4631/groupnotes">
                  <FontAwesomeIcon
                    icon={faCodeBranch}
                    size="lg"
                    style={{ color: "#dadde1", paddingRight: "8px" }}
                  />
                  Source
                </Link>
                <Link to="https://groupnotes.000webhostapp.com">
                  <FontAwesomeIcon
                    icon={faCircle}
                    fade
                    size="xs"
                    style={{ color: "#dc0404", paddingRight: "8px" }}
                  />
                  Live
                </Link>
              </div>
            </div>
          </div>
          <div className="project_details">
            <div className="left_pro">
              <img src={magma} alt="Project_image"></img>
            </div>
            <div className="right_pro">
              <h2>Magma Clone</h2>
              <p>
                Created this Project on <u>HTML,JS and Using Canvas</u>
              </p>
              <div className="project_links">
                <Link to="https://github.com/ak4631/Magma-clone">
                  <FontAwesomeIcon
                    icon={faCodeBranch}
                    size="lg"
                    style={{ color: "#dadde1", paddingRight: "8px" }}
                  />
                  Source
                </Link>
                <Link to="https://magma-clone-ten.vercel.app/">
                  <FontAwesomeIcon
                    icon={faCircle}
                    fade
                    size="xs"
                    style={{ color: "#dc0404", paddingRight: "8px" }}
                  />
                  Live
                </Link>
              </div>
            </div>
          </div>
          <div className="project_details">
            <div className="left_pro">
              <img src={weatherApp} alt="Project_image"></img>
            </div>
            <div className="right_pro">
              <h2>Weather App</h2>
              <p>
                Created this Project on <u>HTML,JS</u>
              </p>
              <div className="project_links">
                <Link to="https://github.com/ak4631/weather-app">
                  <FontAwesomeIcon
                    icon={faCodeBranch}
                    size="lg"
                    style={{ color: "#dadde1", paddingRight: "8px" }}
                  />
                  Source
                </Link>
                <Link to="https://weather-appbyakash.netlify.app/">
                  <FontAwesomeIcon
                    icon={faCircle}
                    fade
                    size="xs"
                    style={{ color: "#dc0404", paddingRight: "8px" }}
                  />
                  Live
                </Link>
              </div>
            </div>
          </div>
          <div className="project_details">
            <div className="left_pro">
              <img src={urlShot} alt="Project_image"></img>
            </div>
            <div className="right_pro">
              <h2>URL Shortner</h2>
              <p>
                Created this Project on <u>Javascript</u>
              </p>
              <div className="project_links">
                <Link to="https://github.com/ak4631/url-shortner/tree/master/P1-URL%20Shortner">
                  <FontAwesomeIcon
                    icon={faCodeBranch}
                    size="lg"
                    style={{ color: "#dadde1", paddingRight: "8px" }}
                  />
                  Source
                </Link>
                <Link to="https://url-shortner-6rx1.vercel.app/">
                  <FontAwesomeIcon
                    icon={faCircle}
                    fade
                    size="xs"
                    style={{ color: "#dc0404", paddingRight: "8px" }}
                  />
                  Live
                </Link>
              </div>
            </div>
          </div>
          <div className="project_details">
            <div className="left_pro">
              <img src={timeline} alt="Project_image"></img>
            </div>
            <div className="right_pro">
              <h2>Indian Timeline</h2>
              <p>Created this project for Enhacing Knowledge.</p>
              <div className="project_links">
                <Link to="https://github.com/ak4631/india-timeline">
                  <FontAwesomeIcon
                    icon={faCodeBranch}
                    size="lg"
                    style={{ color: "#dadde1", paddingRight: "8px" }}
                  />
                  Source
                </Link>
                <Link to="https://india-timeline.vercel.app/">
                  <FontAwesomeIcon
                    icon={faCircle}
                    fade
                    size="xs"
                    style={{ color: "#dc0404", paddingRight: "8px" }}
                  />
                  Live
                </Link>
              </div>
            </div>
          </div>
          <div className="project_details">
            <div className="left_pro">
              <img src={headlines} alt="Project_image"></img>
            </div>
            <div className="right_pro">
              <h2>Chrome Extensions</h2>
              <p>
                Created this project on <u>JS</u>.
              </p>
              <div className="project_links">
                <Link to="https://github.com/ak4631/chrome-extension">
                  <FontAwesomeIcon
                    icon={faCodeBranch}
                    size="lg"
                    style={{ color: "#dadde1", paddingRight: "8px" }}
                  />
                  Source
                </Link>
                <Link to="">
                  <FontAwesomeIcon
                    icon={faCircle}
                    fade
                    size="xs"
                    style={{ color: "#dc0404", paddingRight: "8px" }}
                  />
                  Live
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
