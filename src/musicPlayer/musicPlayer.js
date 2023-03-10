import React, { useRef, useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Spiner from "../spiner/Spiner";
import {musicsContext} from "../context/musicContext"
import "./musicPlayer.css";

export default function MusicPlayer() {
  // variables
  let audio = useRef();
  let rangeInput = useRef();
  let params = useParams();
  let id = params.id;
  let [music, setMusic] = useState("");
  let [showPLay, setShowPLay] = useState(true);
  let [musicTime, setMusicTime] = useState(0);
  let data = useContext(musicsContext);

  //   get musics
  useEffect(() => {
    let fetcher = async () => {
      // let res = await fetch(
      //   `https://music-api-nu-livid.vercel.app/music/${id}`
      // );
      // let data = await res.json();
      setMusic(data.data[id - 1]);
    };
    fetcher();
  }, []);

  // pause and play
  let play = () => {
    audio.current.play();
    setShowPLay(false);
    // rangeInput.max = audio.current.duration
    rangeInput.current.setAttribute("max", audio.current.duration);
    setTime();
  };
  let pause = () => {
    audio.current.pause();
    setShowPLay(true);
  };

  // input range
  let setTime = () => {
    setInterval(async () => {
      setMusicTime(await audio.current.currentTime);
    }, 500);
  };
  let timaChangeHandler = (event) => {
    // audio.current.currentTime
    setMusicTime(event.nativeEvent.target.value);
    audio.current.currentTime = event.nativeEvent.target.value;
  };

  // jsx
  return (
    <div className="musicPlayer">
      <audio ref={audio} src={music.url}></audio>

      {music.cover ? (
        <div className="musicPlayer__top">
          <img src={music.cover} alt="cover" />
          <h1>{music.name}</h1>
          <Link to={`/singer/${music.singerId}`}>
            <h4>{music.singerName}</h4>
          </Link>
        </div>
      ) : (
        <Spiner />
      )}

      <div className="musicPlayer__bottom">
        {showPLay ? (
          <button onClick={play}>
            <img src="/images/play.png" alt="play" />
          </button>
        ) : (
          <button onClick={pause}>
            <img src="/images/pause.png" alt="play" />
          </button>
        )}
        <input
          type="range"
          value={musicTime}
          onChange={timaChangeHandler}
          min="0"
          ref={rangeInput}
        />
      </div>
    </div>
  );
}
