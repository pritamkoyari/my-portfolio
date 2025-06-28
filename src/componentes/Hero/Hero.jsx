// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import styles from "./hero.module.css";
import { getImageUrl } from "../../utils";
import resume from "../../../assets/hero/assets/hero/Pritam_koyari_resume (2).docx";
import Typed from "typed.js";

export const Hero = () => {
useEffect(() => {
  const options = {
    strings: [
      `<span class="typedColor1">Frontend Developer</span>`,
      `<span class="typedColor2">Web Designer</span>`,
      `<span class="typedColor3">Web Developer</span>`,
    ],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    smartBackspace: true,
    showCursor: true,
    html: true, // ✅ This allows HTML tags inside strings
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
            href="mailto:pritamkoyari@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Pritam,"
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
