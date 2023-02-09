import React from 'react';
import Link from 'next/link';
import styles from './cta.module.css';

const CTA = () => (
  <div className={styles.cta}>
    <div className={styles.ctaContent}>
      <p>Request Early Access to Get Started</p>
      <h3>Register Today & start exploring the endless possibilities.</h3>
    </div>
    <div className={styles.ctaBtn}>
      <button type="button"><Link href="/">Get Started</Link></button>
    </div>
  </div>
);

export default CTA;
