import React from "react";
import "../styles/Contact.css";


function Contact() {
  return (
    <div className="contactContainer">
      <div className="left">
        <h1>Contact Us</h1>
        <form action="">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="E-mail" required />
          <input type="text" placeholder="Write a Subject" required />
          <textarea
            required
            name=""
            id=""
            cols="30"
            rows="7"
            placeholder="Your Message"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="right">
        <img src="https://i.insider.com/64c7a2c9048ff200190deaf5?width=1136&format=jpeg" />
      </div>
    </div>
  );
}

export default Contact;
