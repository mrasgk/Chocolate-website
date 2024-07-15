import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../components/ContactUsPage.css";

const ContactUsPage = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lwx19wj",
        "template_o8l6qyc",
        form.current,
        "LZXnMCWMAO794M1gm"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-us-page">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
      <h1>Contact Us</h1>
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="message" required />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactUsPage;
