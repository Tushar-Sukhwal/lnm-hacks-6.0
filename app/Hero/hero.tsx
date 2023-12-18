// components/ParallaxSection.tsx
"use client"
import React, { useEffect } from 'react';
import ScrollLink from '@/components/ScrollLink';
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
        Hold onto your hats because the next spectacular event 
        around the corner is making a comeback, and it's bigger 
        and better than ever!
        </div>
        <div ref={refLink} className={styles.linkContainer}>
          <ScrollLink href="#about">
              <FaArrowDown />
            <h1 className='font-futura font-black'>
            LET THE HACKING BEGIN
            </h1>
          
              <FaArrowDown />
          </ScrollLink>
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
