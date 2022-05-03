import React from "react";
import styles from "./Chicken.module.css";
import ChickenCard from "./ChickenCard";

const Chicken = ({ chickenList }) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>extrordinary chicken recipe</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum esse sunt
        asperiores maxime vel id cupiditate excepturi, dolorum accusantium
        quidem!
      </p>
      <div className={styles.wrapper}>
        {chickenList.map((chick) => (
          <ChickenCard key={chick._id} chick={chick} />
        ))}
      </div>
    </section>
  );
};

export default Chicken;
