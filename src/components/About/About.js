import React from "react";
import "./about.css";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
const About = () => {
  return (
    <div>
      <section className="About-section" id="About_me">
        <div className="right-1">
          <div className="details">
            <h1>About Me</h1>
            <p>
              My name is Akash Tiwari, a passionate full stack developer and a
              student currently pursuing degree in Computer Science. I'm
              learning and exploring new technologies to improve my skills and
              develop great products.
            </p>
            <div className="dt1">
              <h3>Mail Me</h3>
              <h2>
                <Link to="mailto:akashstiwari444@gmail.com">
                  akashstiwari444@gmail.com
                </Link>
              </h2>
            </div>
            <div className="dt1 coding-profiles">
              <h3>Coding Profiles</h3>
              <ul>
                <li>
                  <Link to="https://leetcode.com/efgh37716/">
                    <Icon
                      icon="simple-icons:leetcode"
                      style={{ fontSize: "30px" }}
                    />
                  </Link>
                </li>
                <li>
                  <Link to="https://www.codingninjas.com/studio/profile/e9290fc8-fb89-4ec8-b29b-45d2a427841d">
                    <Icon
                      icon="simple-icons:codingninjas"
                      style={{ fontSize: "30px", color: "red" }}
                    />
                  </Link>
                </li>
                <li>
                  <Link to="https://auth.geeksforgeeks.org/user/efgh3gr3w/">
                    <Icon
                      icon="simple-icons:geeksforgeeks"
                      style={{ fontSize: "30px", color: "green" }}
                    />
                  </Link>
                </li>
                <li>
                  <Link to="https://www.codechef.com/users/akash_463">
                    <Icon
                      icon="simple-icons:codechef"
                      style={{ fontSize: "30px", color: "green" }}
                    />
                  </Link>
                </li>
                <li>
                  <Link to="https://github.com/ak4631">
                    <Icon icon="devicon:github" style={{ fontSize: "30px" }} />
                  </Link>
                </li>
              </ul>
            </div>
            <h1>Skills:</h1>
            <hr></hr>
            <div className="skills-section">
              <div className="sk">
                <h2>Core Skills</h2>
                <ul>
                  <li>C</li>
                  <li>C++</li>
                  <li>Python</li>
                  <li>DSA</li>
                </ul>
              </div>
              <hr></hr>
              <div className="sk">
                <h2>Frontend Skills</h2>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Php</li>
                  <li>Bootstrap</li>
                  <li>React</li>
                  <li>Javascript</li>
                  <li>EJS</li>
                </ul>
              </div>
              <hr></hr>
              <div className="sk">
                <h2>Backend Skills</h2>
                <ul>
                  <li>NodeJS</li>
                  <li>Express</li>
                </ul>
              </div>
              <hr></hr>
              <div className="sk">
                <h2>Database Skills</h2>
                <ul>
                  <li>SQL</li>
                  <li>PLSQL</li>
                  <li>MySQL</li>
                  <li>MongoDb</li>
                </ul>
              </div>
              <hr></hr>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
