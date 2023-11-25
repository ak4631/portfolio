import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [burger_menu, setBurgerClass] = useState("burger-bar unclicked");
  const [bar_class, setBarClass] = useState("bar hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isBars, setIsBarsClicked] = useState(
    <FontAwesomeIcon icon={faBars} size="sm" />
  );
  const [isActive, setIsActive] = useState("");
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setBarClass("bar visible");
      setIsMenuClicked(!isMenuClicked);
      setIsBarsClicked(<FontAwesomeIcon icon={faXmark} size="sm" />);
    } else {
      setBurgerClass("burger-bar unclicked");
      setBarClass("bar hidden");
      setIsMenuClicked(!isMenuClicked);
      setIsBarsClicked(<FontAwesomeIcon icon={faBars} size="sm" />);
    }
  };
  return (
    <>
      <div className="nav">
        <div className="Menu" onClick={updateMenu}>
          <h2 className={burger_menu}>{isBars}</h2>
        </div>
        <div className={bar_class}>
          <ul>
            <li>
              <Link
                to="#home_page"
                onClick={() => {
                  setIsActive("Home");
                  setBurgerClass("burger-bar unclicked");
                  setBarClass("bar hidden");
                  setIsMenuClicked(!isMenuClicked);
                  setIsBarsClicked(<FontAwesomeIcon icon={faBars} size="sm" />);
                }}
                className={isActive === "Home" ? "active" : ""}
                smooth
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="#About_me"
                onClick={() => {
                  setIsActive("About");
                  setBurgerClass("burger-bar unclicked");
                  setBarClass("bar hidden");
                  setIsMenuClicked(!isMenuClicked);
                  setIsBarsClicked(<FontAwesomeIcon icon={faBars} size="sm" />);
                }}
                className={isActive === "About" ? "active" : ""}
                smooth
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="#project_area"
                onClick={() => {
                  setIsActive("Project");
                  setBurgerClass("burger-bar unclicked");
                  setBarClass("bar hidden");
                  setIsMenuClicked(!isMenuClicked);
                  setIsBarsClicked(<FontAwesomeIcon icon={faBars} size="lg" />);
                }}
                className={isActive === "Project" ? "active" : ""}
                smooth
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="#contact_me"
                onClick={() => {
                  setIsActive("Contact");
                  setBurgerClass("burger-bar unclicked");
                  setBarClass("bar hidden");
                  setIsMenuClicked(!isMenuClicked);
                  setIsBarsClicked(<FontAwesomeIcon icon={faBars} size="lg" />);
                }}
                className={isActive === "Contact" ? "active" : ""}
                smooth
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
