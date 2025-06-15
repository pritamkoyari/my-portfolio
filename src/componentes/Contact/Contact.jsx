import { useRef } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Contact.module.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_q2k5w3t', 
        'template_1t2quks', 
        form.current,
        'JIfKltIJRVWsvxS6v' 
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error('Failed to send message, please try again.');
        }
      );
  };

  return (
    <footer id="contact" className={styles.container}>
      <ToastContainer />
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="user_name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="user_email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>Send</button>
      </form>
    </footer>
  );
};
