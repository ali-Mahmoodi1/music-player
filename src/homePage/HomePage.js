import React, { useContext, useEffect } from "react";
import { singersContext } from "../context/singersContext";
import { musicsContext } from "../context/musicContext";
import "./homePage.css";
import HomeSinger from "./singer/singer";
import MusicCard from "../share/music/Music";
import { Link } from "react-router-dom";
import Spiner from "../spiner/Spiner";

export default function HomePage() {
  let singers = useContext(singersContext);
  let musics = useContext(musicsContext);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <div className="home__container">
      <h3 className="home__title">خوانندگان</h3>
      <div className="home__singersContainer">
        {singers &&
          singers.map((item) => <HomeSinger key={item.id} data={item} />)}
      </div>

      <div className="music-top">
        <h3 className="home__title music-title">موزیک ها</h3>
        <Link to="/musics">
          <button className="more-music">بیشتر ...</button>
        </Link>
      </div>

      <div className="home__musicsContainer">
        {musics.data ? (
          musics.data.map((music, index) => {
            if (index < 8) {
              return <MusicCard key={music.id} data={music} />;
            }
          })
        ) : (
          <Spiner />
        )}
      </div>
    </div>
  );
}
