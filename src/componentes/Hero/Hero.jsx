// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import styles from "./hero.module.css";
import { getImageUrl } from "../../utils";
import resume from "../../../assets/hero/Pritam_koyari_resume.docx";
import Typed from "typed.js";

export const Hero = () => {
  useEffect(() => {
    const options = {
      strings: ["Frontend Developer", "Web Designer", "Web Developer"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed(".txt-rotate", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          {`Hi! I'm Pritam`}
          {""} <span className="txt-rotate"></span>
        </h1>
        <p className={styles.description}>
          I am a full-stack developer with 2 years of experience using React and
          NodeJS. Reach out if you would like to learn more!
        </p>
        <div className={styles.buttonGroup}>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=pritamkoyari@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactBtn}
          >
            Contact Me
          </a>

          <a href={resume} download className={styles.downloadBtn}>
            Download CV
          </a>

          {/* <a
            href="../../../assets/hero/Pritam_koyari_resume.docx"
            download
            className={styles.downloadBtn}
          >
            Download CV
          </a> */}
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
