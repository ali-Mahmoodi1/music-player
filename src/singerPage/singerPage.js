import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { musicsContext } from "../context/musicContext";
import { singersContext } from "../context/singersContext";
import MusicCard from "../share/music/Music";
import styles from "./singerPage.module.css";

export default function SingerPage() {
  let params = useParams();
  let singerId = params.id;
  let singers = useContext(singersContext);
  let [singer, setSinger] = useState([{}, {}]);
  let musics = useContext(musicsContext);

  let singerSeter = async () => {
    if (singers[1]) {
      setSinger(await singers[singerId - 1]);
    }
  };
  singerSeter();

  return singer.id ? (
    <div className={styles.singerContainer}>
      {/* image and name */}
      <div className={styles.top}>
        <img src={singer.image} className={styles.img} />
        <h1>{singer.name}</h1>
      </div>
      {/* music */}
      <h3 className={styles.singer__musicTitle}>موزیک ها</h3>
      <div className={styles.musics}>
        {musics.data ? (
          musics.data.map((music) => {
            if (music.singerId === singer.id) {
              return <MusicCard key={music.id} data={music} />;
            }
          })
        ) : (
          <h1>...</h1>
        )}
      </div>
    </div>
  ) : (
    <h1>loading...</h1>
  );
}
