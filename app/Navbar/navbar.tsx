"use client"
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './navbar.module.css';
import { NextPage } from 'next';
import Image from 'next/image';
import logo from './assests/lnm hacks logo.svg'
import Link from 'next/link';

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
        <Link href="/about">About</Link>
        <Link href="/schedule">Schedule</Link>
        <Link href="/ctf">CTF</Link>
        <Link href="/track&prizes">Tracks & Prizes</Link>
        <Link href="/sponsors">Our Sponsors</Link>
        <Link href="/faqs">FAQs</Link>
        <Link href="/venue">Venue</Link>
      </nav>
      <div className={styles['nav-icon']} onClick={handleNavClick}>
        {isNavOpen ? <FaTimes /> : <FaBars />}
      </div>
      {isNavOpen && <div className={styles.overlay} onClick={closeNav}></div>}

    </header>
  );
};

export default Navbar;
