import React from 'react';
import Image from 'next/image';
import styles from './footer.module.css';

const Footer = () => (
  <div className={[styles.footer, "section__padding"].join(" ")}>
    <div className={styles.footerHeading}>
      <h1 className="gradient__text">Step in to the future before anyone else</h1>
    </div>

    <div className={styles.footerBtn}>
      <p>Request Early Access</p>
    </div>

    <div className={styles.footerLinks}>
      <div className={styles.footerLinks_logo}>
        <Image
          src="/logo.svg"
          alt="GPT3 Logo"
          width={118}
          height={30}
          priority
        />
        <p>Something Something, <br /> All Rights Reserved</p>
      </div>
      <div className={styles.footerLinks_div}>
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className={styles.footerLinks_div}>
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className={styles.footerLinks_div}>
        <h4>Get in touch</h4>
        <p>Something Something,</p>
        <p>867-5309</p>
        <p>buyme@coffee.net</p>
      </div>
    </div>

    <div className={styles.footerLinks_div}>
      <p>@2023 Something Something. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
