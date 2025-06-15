import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Contact.module.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q2k5w3t",
        "template_1t2quks",
        form.current,
        "28snZRhd13qn_gy4c"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message, please try again.");
        }
      );
  };

  return (
    <>
      <footer id="contact" className={styles.container}>
        <ToastContainer />
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="from_name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="reply_to"
              placeholder="Your Email"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Send
          </button>
        </form>

        {/* New Footer Section */}
      </footer>
      <div className={styles.footer}>
        <p>
          &copy; {new Date().getFullYear()} Pritam Koyari. All rights reserved.
        </p>
        <div className={styles.footerLinks}>
          <a
            href="https://github.com/pritamkoyari"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pritam-koyari-b2a016214/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="mailto:pritamkoyari@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Pritam,"
          >
            Email
          </a>
        </div>
      </div>
    </>
  );
};
