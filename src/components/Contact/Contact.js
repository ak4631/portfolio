import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_34rm3lj",
        "template_qesn7bd",
        form.current,
        "wcD-EXz47HkatH5YF"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message Sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <section className="contact_details" id="contact_me">
        <h1>Reach Out To Me</h1>
        <div className="contact_info">
          <ul>
            <li>
              <div className="Icons_here">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{
                    "--fa-primary-color": "#164598",
                    "--fa-secondary-color": "#1b1037",
                    fontSize: "20px",
                  }}
                />
              </div>
              <div className="descrip">
                <h3>Email Me</h3>
                <Link to="mailto:akashstiwari444@gmail.com">
                  akashstiwari444@gmail.com
                </Link>
              </div>
            </li>
            <li>
              <div className="Icons_here">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ color: "yellow", fontSize: "20px" }}
                />
              </div>
              <div className="descrip">
                <h3>Location</h3>
                <p>Thane,India</p>
              </div>
            </li>
            <li>
              <div className="Icons_here">
                <FontAwesomeIcon
                  icon={faPhoneVolume}
                  style={{ fontSize: "20px" }}
                />
              </div>
              <div className="descrip">
                <h3>Phone</h3>
                <Link to="tel:+919136831459">+91 9136831459</Link>
              </div>
            </li>
          </ul>
        </div>
        <div className="send_form">
          <form ref={form} onSubmit={sendEmail}>
            <div className="nmail">
              <input type="text" name="user_name" placeholder="Name" />

              <input type="email" name="user_email" placeholder="Email" />
            </div>

            <input type="email" name="user_subject" placeholder="Subject" />

            <textarea name="message" placeholder="Message Here" />
            <input type="submit" value="Send" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
