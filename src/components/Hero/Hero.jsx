import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Deepansh Nag</h1>
        <p className={styles.description}>
        As a fresher with a strong command of Pyhton and web 
        development. Proficient in React, MongoDB, Node, and
        Express, demonstrated through hands-on project.
        Experienced in crafting dynamic web applications and
        managing database. Eager to leverage acquired knowledge
        and passion for technology to drive innovation and 
        deliver impactful solutions in the field.
        </p>
        <a href="mailto:nagdeepansh@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
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
