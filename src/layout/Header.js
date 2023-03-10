import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import styles from "./layout.module.css";

let Header = () => {
  let [lightTheme, setLightTheme] = useState(false);
  let [showModal2, setShowModal2] = useState(false);
  let showModal = () => {
    setShowModal2(!showModal2);
  };

  let Modal = styled.div`
    opacity: ${showModal2 ? "1" : "0"};
    visibility: ${showModal2 ? "visible" : "hidden"};
  `;

  // changeTheme

  let changeTheme = () => {
    setLightTheme(!lightTheme);
    if (!lightTheme) {
      document.documentElement.style.setProperty("--color-1", "#ececec");
      document.documentElement.style.setProperty("--color-2", "#000");
      document.documentElement.style.setProperty("--color-3", "#fcfcfc");
      document.documentElement.style.setProperty("--color-4", "#b39500");
      document.documentElement.style.setProperty("color-scheme", "light");
      localStorage.setItem("musicThemeLight", "true");
    } else {
      document.documentElement.style.setProperty("--color-1", "#513b67");
      document.documentElement.style.setProperty("--color-2", "#fcfcfc");
      document.documentElement.style.setProperty("--color-3", "#000");
      document.documentElement.style.setProperty("--color-4", "#ebc400");
      document.documentElement.style.setProperty("color-scheme", "dark");
      localStorage.setItem("musicThemeLight", "false");
    }
  };

  return (
    <header>
      <div>
        <Link to="/home" className={styles.h1Link}>
          <h1>موزیک پلیر</h1>
        </Link>
        <button onClick={showModal}>
          <div></div>
          <div></div>
          <div></div>
        </button>
        <Modal className={styles.header__modal}>
          <button onClick={changeTheme}>تغییر تم</button>
          <Link to="/home">
            <button>صفحه اصلی</button>
          </Link>
          <Link to="/musics">
            <button>موزیک ها</button>
          </Link>
        </Modal>
      </div>
    </header>
  );
};

export default Header;
