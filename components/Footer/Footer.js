import Image from "next/image";
import React from "react";
import { GoLocation } from "react-icons/go";
import { AiOutlineFieldTime } from "react-icons/ai";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image
          src="/Img/flower.jpg"
          alt="footer image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h3 className={styles.motto}>Home of Extraordinary Chicken Recipe</h3>
        </div>
        <div className={styles.card}>
          <h3 className={styles.title}>
            {" "}
            <GoLocation size={30} />
            Locate our branches
          </h3>
          <p className={styles.text}>
            123 A Avenu road
            <br />O town, 4985
            <br />
            +23408048912049
          </p>
          <p className={styles.text}>
            123 B Avenu road
            <br />B town, 4985
            <br />
            +23408048912049
          </p>
          <p className={styles.text}>
            123 C Avenu road
            <br />C town, 4985
            <br />
            +23408048912049
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.title}>
            <AiOutlineFieldTime size={30} />
            Working Hours
          </div>
          <div className={styles.text2}>
            MONDAY - FRIDAY
            <br /> 9:00am-11:00pm
          </div>
          <div className={styles.text2}>
            SATURDAY - SUNDAY
            <br /> 11:00am-10:00pm
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
