import React from 'react';
import Image from 'next/image';
import styles from './footer.module.css';

const Footer = () => (
  <div className={[styles.footer, "section__padding"].join(" ")}>
    <div className={styles.footerHeading}>
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
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
        <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
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
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className={styles.footerLinks_div}>
      <p>@2021 GPT-3. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
