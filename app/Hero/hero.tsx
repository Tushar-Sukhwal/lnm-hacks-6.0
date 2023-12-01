// components/ParallaxSection.tsx
"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import { FaArrowDown } from "react-icons/fa";
import { useParallax, useParallaxController, ParallaxProvider } from 'react-scroll-parallax';
import styles from './hero.module.css';

const ParallaxSectionContent: React.FC = () => {
  const { ref: refLeft } = useParallax<HTMLDivElement>({ speed: 100 });
  const { ref: refRight } = useParallax<HTMLDivElement>({ speed: 100 });
  const { ref: refLink } = useParallax<HTMLDivElement>({ speed: 15 });
  const { ref: refTheBox } = useParallax<HTMLDivElement>({ speed: 100 }); // New box

  const parallaxController = useParallaxController();

  useEffect(() => {
    parallaxController?.update();
  }, [parallaxController]);
  return (
      <div className={styles.parallaxSection}>
        {/* THE Box */}
        <div className={styles.leftContainer}>
        <div ref={refTheBox} className={styles.theBox}>
          The
        </div>
        <div ref={refLeft} className={styles.boxLeft}>
          LNMHACKS
        </div>
        </div>
        <div ref={refRight} className={styles.boxRight}>
          The Next Biggest Thing Happening Around You is Back!!!
        </div>
        <div ref={refLink} className={styles.linkContainer}>
          <Link href="/">
              <FaArrowDown />
            
            LET THE HACKING BEGIN
          
              <FaArrowDown />
          </Link>
        </div>
      </div>
    
  );
};

const ParallaxSection: React.FC = () => {
  return (
    <ParallaxProvider>
      <ParallaxSectionContent />
    </ParallaxProvider>
  );
};

export default ParallaxSection;
