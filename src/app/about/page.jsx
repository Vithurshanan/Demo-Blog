import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Building the Future with Code</h1>
          <h2 className={styles.imgDesc}>
          Creating reliable and innovative software applications
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            We are passionate software 
            developers dedicated to building reliable and innovative software 
            applications that cater to the specific needs of businesses 
            and individuals. With a focus on modern technologies and practical 
            solutions, we transform complex problems into efficient, user-friendly systems.
            <br /><br />
            We excel in creating software that is not only robust and scalable but also 
            designed with the user experience in mind. From custom web applications to 
            complete digital solutions, every project is handled with precision and 
            a commitment to excellence.
            <br /><br /><br /><br /><br /><br />
            <b>Our mission is to empower businesses through technology, providing 
            cutting-edge solutions that help them thrive in today’s dynamic digital world.</b>
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
          we specialize in delivering a wide range of software development services 
          that bring innovation and functionality to the forefront. Whether you need 
          a dynamic web application or a custom-built solution, we provide tailored 
          services to meet your needs. 
            <br />
            <br /> - Custom Software Development
            <br />
            <br /> - Dynamic Websites 
            <br />
            <br /> - Mobile App Development
            <br />
            <br /> - Cloud Integration
          </p>
          <b>Our expertise in the latest technologies allows us to deliver innovative solutions that drive success for our clients.</b>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;