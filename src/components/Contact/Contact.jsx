import React, { useContext, useRef, useState, useEffect } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const initialValues = { username: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = () => {
    //console.log(formValues);
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
          setFormValues(initialValues);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "cannot be black";
    } else if (values.username.length > 150) {
      errors.username = "user name length is not more than 150 charaters";
    }

    if (!values.email) {
      errors.email = "cannot be black";
    } else if (!regex.test(values.email)) {
      errors.email = "invalid email format";
    }
    if (!values.message) {
      errors.message = "cannot be black";
    } else if (values.message.length > 1000) {
      errors.message = "message length is not more than 1000 charaters";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submitForm();
    }
    return () => {
      setFormValues(initialValues);
    };
  }, [formErrors, isSubmitting]);

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
        <form
          ref={form}
          id="form"
          name="form"
          onSubmit={handleSubmit}
          noValidate
        >
          <div
            className=""
            style={{ display: "flex", flexDirection: "column" }}
          >
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Name"
              onChange={handleChange}
              value={formValues.username}
              className={(formErrors.username && "error user") || "user"}
            />
            {formErrors.email && (
              <span className="" style={{ color: "red" }}>
                {formErrors.username}
              </span>
            )}
          </div>
          <div
            className=""
            style={{ display: "flex", flexDirection: "column" }}
          >
            <input
              type="email"
              name="email"
              id="email"
              className={(formErrors.email && "error user") || "user"}
              placeholder="Email"
              onChange={handleChange}
              value={formValues.email}
            />
            {formErrors.email && (
              <span className="" style={{ color: "red" }}>
                {formErrors.email}
              </span>
            )}
          </div>
          <div
            className=""
            style={{ display: "flex", flexDirection: "column" }}
          >
            <textarea
              name="message"
              id="message"
              onChange={handleChange}
              value={formValues.message}
              className={(formErrors.message && "error user") || "user"}
              placeholder="Message"
            />
            {formErrors.email && (
              <span className="" style={{ color: "red" }}>
                {formErrors.message}
              </span>
            )}
          </div>
          <input type="submit" value="Send" className="button" />
          <div>
            {Object.keys(formErrors).length === 0 && isSubmitting && (
              <span className="success-msg">Thanks for Contacting me</span>
            )}
          </div>
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
