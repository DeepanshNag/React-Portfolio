import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Professional profile"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I am a skilled frontend developer with a focus on creating
                responsive and optimized websites. My proficiency lies in
                developing user-friendly interfaces that are both aesthetically
                pleasing and functionally robust. I possess a strong command of
                HTML, CSS, JavaScript, and frameworks such as React, which I have
                successfully applied in various projects to deliver high-quality
                web applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I bring experience in developing fast and optimized backend
                systems and APIs. My expertise includes building scalable and
                efficient server-side applications using technologies such as
                Node.js and Django. I have a comprehensive understanding of
                database management, including SQL and NoSQL databases, and I am
                proficient in designing RESTful APIs to facilitate seamless
                communication between frontend and backend systems.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have significant experience in designing landing pages and
                developing cohesive design systems. My focus is on creating
                visually appealing and user-centric designs that align with brand
                identity and achieve business objectives. My expertise in design
                tools and principles allows me to deliver high-quality UI designs
                that enhance user experiences.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
