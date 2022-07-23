import React, { useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";

// components
import Sidebar from "components/Sidebar";
import TrackPlayer from "components/TrackPlayer";
import Header from "components/Header";

// pages
import { Home, Playlist, Search, AlbumPlaylist } from "pages";

// styles
import "./App.scss";

// context
export const Player = React.createContext({});

function App() {
  const [playingAlbumId, setPlayingAlbumId] = useState("");
  const [playingSong, setPlayingSong] = useState({ id: null, src: null });
  const [isPlaying, setIsPlaying] = useState(false);

  const setPlayingSongInfo = (id, src, albumId) => {
    setPlayingSong({ id, src });
    setPlayingAlbumId(albumId);
    console.log("set song info");
  };

  const contextValue = useMemo(
    () => ({
      playingSong,
      setPlayingSong,
      playingAlbumId,
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
          <Route path="/" element={<Home />} />
          <Route path="/playlist">
            <Route index element={<Playlist />} />
            <Route path=":id" element={<AlbumPlaylist />} />
          </Route>
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </Player.Provider>
  );
}

export default App;
