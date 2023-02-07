import React, { useState } from 'react';
import Image from 'next/image';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import styles from './navbar.module.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLinks}>
        <div className={styles.navbarLinks_logo}>
        <Image
          src="/logo.svg"
          alt="GPT3 Logo"
          width={62.56}
          height={16.02}
          priority
        />
        </div>
        <div className={styles.navbarLinks_container}>
          <p><a href="#landing">landing</a></p>
          <p><a href="#wgpt3">What is GPT3?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className={styles.navbarSign}>
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className={styles.navbarMenu}>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className={[styles.navbarMenu_container, styles.scaleUpCenter].join(" ")}>
          <div>
            <p><a href="#landing">landing</a></p>
            <p><a href="#wgpt3">What is GPT3?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
          <div className={styles.navbarMenu_containerLinksSign}>
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
