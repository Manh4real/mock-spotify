import React from "react";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

// components
import Sidebar from "components/Sidebar";
import TrackPlayer from "components/TrackPlayer";
import Header from "components/Header";

// pages
import { Home, Playlist, Search, AlbumPlaylist } from "pages";

// styles
import "./App.scss";

// Redux Toolkit
import store from "features/store";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
