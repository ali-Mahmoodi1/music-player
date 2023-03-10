import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { musicsContext } from "../context/musicContext";
import MusicCard from "../share/music/Music";
import Spiner from "../spiner/Spiner";
import "./musics.css";

export default function Musics() {
  let [musics, setMusics] = useState([]);
  let musicContext = useContext(musicsContext)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0,});

    let fether = async () => {
      let data = await axios.get("https://music-api-nu-livid.vercel.app/music");
      setMusics(data.data);
    };
    fether();
  }, []);

  return (
    <div className="Musics_container">
      {musics[1] ?
        musics.map((music) => <MusicCard key={music.id} data={music} />)
        : <Spiner/>
      }
    </div>
  );
}
