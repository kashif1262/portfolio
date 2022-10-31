import React, { useContext } from "react";
import { useFormik } from "formik";
import { contactSchema } from "../../schemas";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";

const onSubmit = async (values, actions) => {
  //console.log(values);
  //console.log(actions);
  let templateParams = {
    name: values.name,
    email: values.email,
    message: values.message,
  };
  //await new Promise((resolve) => setTimeout(resolve, 100));
  emailjs
    .send(
      "service_w1dgs9b",
      "template_y2a6run",
      templateParams,
      "eMFykOuqGlVSV7BiV"
    )
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        actions.resetForm();
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
};

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: contactSchema,
    onSubmit,
  });

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
        <form id="form" name="form" onSubmit={handleSubmit} noValidate>
          <div
            className=""
            style={{ display: "flex", flexDirection: "column" }}
          >
            <input
              value={values.name}
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className={errors.name && touched.name ? "error user" : "user"}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name && (
              <span style={{ color: "red" }}>{errors.name}</span>
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
              className={errors.email && touched.email ? "error user" : "user"}
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && (
              <span style={{ color: "red" }}>{errors.email}</span>
            )}
          </div>
          <div
            className=""
            style={{ display: "flex", flexDirection: "column" }}
          >
            <textarea
              name="message"
              id="message"
              className={
                errors.message && touched.message ? "error user" : "user"
              }
              placeholder="Message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
            />
            {errors.message && touched.message && (
              <span style={{ color: "red" }}>{errors.message}</span>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            value="Send"
            className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            Send
          </button>
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
