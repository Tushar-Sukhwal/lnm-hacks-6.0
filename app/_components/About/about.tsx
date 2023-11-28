// components/TwoColumnLayout.tsx

import React from 'react';
import styles from './about.module.css';
import Image from 'next/image';

import image from './assests/image 23.png'
import barcode from './assests/Group.svg'
import code from './assests/code.svg'
import purple from './assests/purple.svg'
import blue from './assests/blue.svg'
import green from './assests/green.svg'

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.topic}>
          <div className={styles.topicLeft}>Topic#1</div>
          <div className={styles.topicRight}>About</div>
        </div>
        <div className={styles.heading}>
          About LNM hacks
        </div>
        <div className={styles.content}>
          LNMHacks is the flagship annual hackathon of The LNM Institute of Information Technology. A 72-hours in-person hackathon with a wide range of tracks in the blockchain field, such as DeFi, DAOs, NFTs, and gaming.
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.imageRectangle}>
          <Image className={styles.image} src={image} alt="Image" />
          <div className={styles.barcodeCode}>
          <Image className={styles.barcode} src={barcode} alt="Image" />
          <Image className={styles.code}src={code} alt="Image" />
          </div>
          <Image className={styles.purple} src={purple} alt='purple circle'/>
          <Image className={styles.blue} src={blue} alt='blue circle'/>
          <Image className={styles.green} src={green} alt='green circle'/>
        </div>
      </div>
    </div>
  );
};

export default About;
