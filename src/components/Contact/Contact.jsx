import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    if (username !== "" && email !== "" && message !== "") {
      emailjs
        .sendForm(
          "service_w1dgs9b",
          "template_y2a6run",
          form.current,
          "eMFykOuqGlVSV7BiV"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
            form.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      alert("username, email and message are not empty");
    }
    setUsername("");
    setEmail("");
    setmessage("");
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <textarea
            name="message"
            onChange={(e) => setmessage(e.target.value)}
            value={message}
            className="user"
            placeholder="Message"
          />
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
