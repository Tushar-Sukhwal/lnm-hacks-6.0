"use client"
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './navbar.module.css';
import { NextPage } from 'next';
import Image from 'next/image';
import logo from './assests/lnm hacks logo.svg'
import Link from 'next/link';
import ScrollLink from '@/components/ScrollLink';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

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
        <ScrollLink href="#about" className='font-futura'>About</ScrollLink>
        <ScrollLink href="#schedule" className='font-futura'>Schedule</ScrollLink>
        <ScrollLink href="#ctf" className='font-futura'>CTF</ScrollLink>
        <ScrollLink href="/track&prizes" className='font-futura'><AlertDialog>
        <AlertDialogTrigger >
        Tracks & Prizes
        </AlertDialogTrigger>
        <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
        </AlertDialog></ScrollLink>
        <ScrollLink href="/sponsors" className='font-futura'>
        <AlertDialog >
        <AlertDialogTrigger >
        Our Sponsors
        </AlertDialogTrigger>
        <AlertDialogContent className=' rounded-none shadow-xl'>
        
        <AlertDialogHeader>
          OOPS!!! Not Available 
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
        </AlertDialog>
        </ScrollLink>
        <ScrollLink href="#faqs" className='font-futura font'>FAQs</ScrollLink>
        <ScrollLink href="#venue" className='font-futura font-medium'>Venue</ScrollLink>
      </nav>
      <div className={styles['nav-icon']} onClick={handleNavClick}>
        {isNavOpen ? <FaTimes /> : <FaBars />}
      </div>
      {isNavOpen && <div className={styles.overlay} onClick={closeNav}></div>}

    </header>
  );
};

export default Navbar;
