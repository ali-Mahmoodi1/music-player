import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const musicsContext = createContext();

export default function MusicsContextProvider({ children }) {
  let [musics, setMusics] = useState([]);

  useEffect(() => {
    let fether = async () => {
      let data = await axios.get(`https://music-api-nu-livid.vercel.app/music`)
      setMusics(data);
    };
    fether();
  }, []);

  if (musics) {
    return (
      <musicsContext.Provider value={musics}>{children}</musicsContext.Provider>
    );
  }
}
