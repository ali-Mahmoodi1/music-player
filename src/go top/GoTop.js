import React from "react";
import styles from "./goTop.module.css";
let GoTop = () => {
  return (
    <a className={styles.GoTop} href="#top">
      <img src="/images/right-arrow.svg" alt="go top" />
    </a>
  );
};

export default GoTop;
