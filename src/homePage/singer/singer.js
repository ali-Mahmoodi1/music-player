import React from "react";
import styles from "./singer.module.css";
import { Link } from "react-router-dom";

export default function HomeSinger({ data }) {
  return (
    <Link to={`/singer/${data.id}`} className={styles.container}>
      <img src={data.image} className={styles.img} />
      <div className={styles.info}>
        <h2 className={styles.title}>{data.name}</h2>
        <img src="/images/right-arrow.svg" loading="lazy"/> 
        </div>
    </Link>
  );
}
