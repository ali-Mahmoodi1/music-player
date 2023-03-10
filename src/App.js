import "./App.css";
import HomePage from "./homePage/HomePage";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import SingersContextProvider from "./context/singersContext";
import MusicsContextProvider from "./context/musicContext";
import Musics from "./musics/Musics";
import MusicPlayer from "./musicPlayer/musicPlayer";
import { Navigate, Route, Routes } from "react-router-dom";
import SingerPage from "./singerPage/singerPage";
import GoTop from "./go top/GoTop"

let App = () => {

  return (
    <>
      <SingersContextProvider>
        <MusicsContextProvider>
          <Header />
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/musics" element={<Musics />} />
            <Route path="/music/:id" element={<MusicPlayer />} />
            <Route path="/singer/:id" element={<SingerPage />} />
            <Route path="/*" element={<Navigate to="/home" />} />
          </Routes>
          <Footer />
          <GoTop />
        </MusicsContextProvider>
      </SingersContextProvider>
    </>
  );
};

export default App;
