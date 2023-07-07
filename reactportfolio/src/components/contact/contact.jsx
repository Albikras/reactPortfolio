import React from "react";
import "./contact.css";
import { useRef } from "react";
import emailjs from "emailjs-com";

import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6g9ghle",
        "template_5nj7jzr",
        form.current,
        "YZF8uKACZ1BE5j0He"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section>
      <h5>Enter In The Feilds Below To</h5>
      <h2>Contact Me</h2>

      <div className="container contactDiv">
        <div className="options">
          <article className="opt">
            <MdOutlineEmail className="icon" />
            <h4>My email: krasniqi1287</h4>
            <h5></h5>
            <a href="mailto:krasniqi1287@gmail.com">send a message</a>
          </article>
          <article className="opt">
            <FaFacebookMessenger className="icon" />
            <h4>My messanger: </h4>
            <h5></h5>
            <a href="https://m.me/mymessangerid">send a message</a>
          </article>
          <article className="opt">
            <AiFillPhone className="icon" />
            <h4>My Number: 905-325-6867</h4>
            <h5></h5>
            <a href="https://m.me/1873312902893349">send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Email
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
