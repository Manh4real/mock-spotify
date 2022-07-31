import React, { memo, useState } from "react";

// components
import PlaylistRow from "./PlaylistRow";

// constants
import { ALBUMS } from "constants";

const SONGS = ALBUMS[0].items;

function PlaylistTable() {
  const [songs, setSongs] = useState([]);

  useState(() => {
    setSongs(SONGS);
  }, []);

  return songs.map((song, i) => {
    return (
      <PlaylistRow
        key={i}
        songId={song.id}
        songUrl={song.url}
        albumId={ALBUMS[0].id}
        songName={song.songName}
        albumName={song.album.albumName}
        artists={song.artists}
        duration={song.duration}
        imageSrc={song.image}
        i={i}
      />
    );
  });
}

export default memo(PlaylistTable);
