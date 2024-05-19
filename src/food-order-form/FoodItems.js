import React from "react";
import styles from "./FoodItems.module.css";

const FoodItems = ({ name, price, imgSrc }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={imgSrc} alt="" className={styles.image} />
      </div>
      <div className={styles.detailsWrapper}>
        <h3>{name}</h3>
        <p className={styles.details}>{`Price: ${`${price}`}`}</p>
      </div>
    </div>
  );
};

export default FoodItems;