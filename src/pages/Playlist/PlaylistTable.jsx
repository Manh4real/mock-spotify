import React, { memo, useState } from "react";
import { ALBUMS } from "constants";
import PlaylistRow from "./PlaylistRow";

const SONGS = ALBUMS[0].items;

function PlaylistTable() {
  const [songs, setSongs] = useState([]);

  useState(() => {
    setSongs(SONGS);
  }, []);

  return (
    <>
      {songs.map((song, i) => {
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
            i={i}
          />
        );
      })}
    </>
  );
}

export default memo(PlaylistTable);
