import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./music.module.css";

let MusicCard = ({ data }) => {
  let { id, cover, singerName, name } = data;

  return (
    <Link to={`/music/${id}`}>
      <button className={styles.homeMusic__container}>
        <img src={cover} alt="music" className={styles.homeMusic__img} loading="lazy"/>
        <h3 className={styles.homeMusic__singer}>{singerName}</h3>
        <h1 className={styles.homeMusic__title}>{name}</h1>
      </button>
    </Link>
  );
};
export default MusicCard;
