"use client"
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './navbar.module.css';
import { NextPage } from 'next';
import Image from 'next/image';
import logo from './assests/lnm hacks logo.svg'


interface NavbarProps {}

const Navbar: NextPage<NavbarProps> = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header className={styles.navbar}>
      <Image className={styles.logo} src={logo} width={800}  height={500} alt=""/>
      <nav className={`${styles['nav-links']} ${isNavOpen ? styles['show-nav'] : styles['hide-nav']}`}>
        <a href="/#">About</a>
        <a href="/#">Schedule</a>
        <a href="/#">CTF</a>
        <a href="/#">Tracks & Prizes</a>
        <a href="/#">Our Sponsors</a>
        <a href="/#">FAQs</a>
        <a href="/#">Venue</a>
      </nav>
      <div className={styles['nav-icon']} onClick={handleNavClick}>
        {isNavOpen ? <FaTimes /> : <FaBars />}
      </div>
      {isNavOpen && <div className={styles.overlay} onClick={closeNav}></div>}

    </header>
  );
};

export default Navbar;
