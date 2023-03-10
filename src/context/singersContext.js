import { createContext, useEffect, useState } from "react";

export const singersContext = createContext();

export default function SingersContextProvider({ children }) {
  let [singers, setSingers] = useState([]);

  useEffect(() => {
    let fether = async () => {
      let res = await fetch(`https://music-api-nu-livid.vercel.app/singer`);
      let singers = await res.json();
      await setSingers(await singers);
    };
    fether();
  });

  return (
    <singersContext.Provider value={singers}>
      {children}
    </singersContext.Provider>
  );
}
