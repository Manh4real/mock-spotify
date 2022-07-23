import React, { useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";

import Sidebar from "components/Sidebar";
import TrackPlayer from "components/TrackPlayer";
import Header from "components/Header";

import { Home, Playlist, Search } from "pages";
import AlbumPlaylist from "pages/AlbumPlaylist";

// context
export const Player = React.createContext({});
function App() {
  // const [playingId, setPlayingId] = useState("");
  const [playingAlbumId, setPlayingAlbumId] = useState("");
  const [playingSong, setPlayingSong] = useState({ id: null, src: null });
  const [isPlaying, setIsPlaying] = useState(false);

  const setPlayingSongInfo = (id, src, albumId) => {
    setPlayingSong({ id, src });
    setPlayingAlbumId(albumId);
    console.log("setPlayingSongInfo");
  };

  const contextValue = useMemo(
    () => ({
      playingSong,
      setPlayingSong,
      playingAlbumId,
      setPlayingAlbumId,
      isPlaying,
      setIsPlaying,
      setPlayingSongInfo,
    }),
    [playingSong, isPlaying, playingAlbumId]
  );

  return (
    <Player.Provider value={contextValue}>
      <div className="App">
        <Sidebar />
        <TrackPlayer />
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/playlist">
            <Route index element={<Playlist />} />
            <Route path=":id" element={<AlbumPlaylist />} />
          </Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </div>
    </Player.Provider>
  );
}

export default App;
