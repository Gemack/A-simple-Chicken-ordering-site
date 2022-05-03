import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import styles from "./Feature.module.css";
import Image from "next/image";

const Feature = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/Img/cooked Chicken 2.jpg",
    "/Img/cooked Chicken 3.jpg",
    "/Img/cooked chicken 4.jpg",
    "/Img/chicken 8.jpg",
  ];

  const handleArrow = (d) => {
    if (d === "l") {
      setIndex(index !== 0 ? index - 1 : 3);
    }
    if (d === "r") {
      setIndex(index !== 3 ? index + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <AiOutlineArrowLeft
        size={10}
        className={styles.arrow}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      />
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((m, i) => (
          <div className={styles.imgContainer} key={i}>
            <img src={m} alt="slider image" />
          </div>
        ))}
      </div>
      <AiOutlineArrowRight
        size={10}
        className={styles.arrow}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      />
    </div>
  );
};

export default Feature;
