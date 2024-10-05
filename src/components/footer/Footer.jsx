import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from 'next/link';

const Footer = () => {
  return (
    
    <div className={styles.container}>
      <div>©2024 Vithurshanan. All rights reserved.</div>
      <div className={styles.social}>
        <Link href="https://www.facebook.com/lithu.vithu.7"><Image src="/1.png" width={15} height={15} className={styles.icon} alt=" Facebook Account" /></Link>
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Instagram" />
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Twitter" />
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="YouTube" />
      </div>
    </div>
  );
};

export default Footer;