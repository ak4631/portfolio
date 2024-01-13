import React from "react";
import "./home.css";
import BoyPic from "./BoyPic.avif";
import { HashLink as Link } from "react-router-hash-link";
const Home = () => {
  return (
    <div>
      <section className="page1" id="home_page">
        <div className="left">
          <div className="contents">
            <h3>Hi, I am</h3>
            <br />
            <h1>Akash Tiwari</h1>
            <br />
            <h2>A Student and Devloper</h2>
            <div className="Btns">
              <button>
                <Link to="https://yellow-francyne-95.tiiny.site/">Resume</Link>
              </button>

              <button>
                <Link to="https://www.linkedin.com/in/akash-tiwari-0a3a12259">
                  Connect
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={BoyPic} alt="Geek" />
        </div>
      </section>
    </div>
  );
};

export default Home;
