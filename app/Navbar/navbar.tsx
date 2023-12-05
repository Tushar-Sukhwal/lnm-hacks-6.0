"use client"
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './navbar.module.css';
import { NextPage } from 'next';
import Image from 'next/image';
import logo from './assests/lnm hacks logo.svg'
import Link from 'next/link';
import ScrollLink from '@/components/ScrollLink';

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
        <ScrollLink href="#about">About</ScrollLink>
        <ScrollLink href="#schedule">Schedule</ScrollLink>
        <ScrollLink href="#ctf">CTF</ScrollLink>
        <ScrollLink href="/track&prizes">Tracks & Prizes</ScrollLink>
        <ScrollLink href="/sponsors">Our Sponsors</ScrollLink>
        <ScrollLink href="#faqs">FAQs</ScrollLink>
        <ScrollLink href="#venue">Venue</ScrollLink>
      </nav>
      <div className={styles['nav-icon']} onClick={handleNavClick}>
        {isNavOpen ? <FaTimes /> : <FaBars />}
      </div>
      {isNavOpen && <div className={styles.overlay} onClick={closeNav}></div>}

    </header>
  );
};

export default Navbar;
