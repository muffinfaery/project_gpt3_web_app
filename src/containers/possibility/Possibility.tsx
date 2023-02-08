import React from 'react';
import Image from 'next/image';
import styles from './possibility.module.css';

const Possibility = () => (
  <div className={[styles.possibility, "section__padding"].join(" ")} id="possibility">
    <div className={styles.possibilityImage}>
      <Image
          src="/possibility.png"
          alt="Possibility"
          width={2184}
          height={2431}
          priority
        />
    </div>
    <div className={styles.possibilityContent}>
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
