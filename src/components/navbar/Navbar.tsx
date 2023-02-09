import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'
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
          <p><Link href="/">Get Started</Link></p>
          <p><Link href="/about">What is GPT3?</Link></p>
          <p><Link href="/possibility">Possibility</Link></p>
          <p><Link href="/blogs">Blog</Link></p>
        </div>
      </div>
      <div className={styles.navbarSign}>
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className={styles.navbarMenu}>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} data-cy="navbar_navbarMenu_icon"/>
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} data-cy="navbar_navbarMenu_icon"/>}
        {toggleMenu && (
        <div className={[styles.navbarMenu_container, styles.scaleUpCenter].join(" ")} data-cy="navbar_navbarMenu">
          <div>
            <p><Link href="/" onClick={() => setToggleMenu(false)}>Get Started</Link></p>
            <p><Link href="/about" onClick={() => setToggleMenu(false)}>What is GPT3?</Link></p>
            <p><Link href="/possibility" onClick={() => setToggleMenu(false)}>Possibility</Link></p>
            <p><Link href="/blogs" onClick={() => setToggleMenu(false)}>Blog</Link></p>
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
