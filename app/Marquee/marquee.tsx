// components/Marquee.tsx
import React from 'react';
import FastMarquee from 'react-fast-marquee';
import styles from './marquee.module.css';

interface MarqueeProps {
  text: string;
}

const Marquee: React.FC<MarqueeProps> = ({ text }) => {
  return (
    <FastMarquee className={styles.marqueeContainer} speed={200}>
      <span className={styles.marqueeText}>{`\u00a0 ${text} \u00a0 `}</span>
      <span className={styles.marqueeText}>{`\u00a0 ${text} \u00a0 `}</span>
      <span className={styles.marqueeText}>{`\u00a0 ${text} \u00a0 `}</span>
      <span className={styles.marqueeText}>{`\u00a0 ${text} \u00a0 `}</span>
      <span className={styles.marqueeText}>{`\u00a0 ${text} \u00a0 `}</span>
      <span className={styles.marqueeText}>{`\u00a0 ${text} \u00a0 `}</span>
      <span className={styles.marqueeText}>{`\u00a0 ${text} \u00a0 `}</span>
    </FastMarquee>
  );
};

export default Marquee;
