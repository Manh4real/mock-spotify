import { Player } from "App";
import React, { useContext } from "react";

import { ALBUMS } from "constants";

function AlbumPlayButton({ albumId }) {
  const { isPlaying, setIsPlaying, setPlayingSongInfo, playingAlbumId } =
    useContext(Player);

  const handleClick = () => {
    if (playingAlbumId === albumId) setIsPlaying((prev) => !prev);
    else if (albumId === ALBUMS[0].id) {
      setPlayingSongInfo(
        ALBUMS[0].items[0].id,
        ALBUMS[0].items[0].url,
        albumId
      );
      setIsPlaying(true);
    }
  };

  return (
    <div className="pllst-play-btn" onClick={handleClick}>
      {isPlaying && playingAlbumId === albumId ? (
        <div className="btn lines-ctn">
          <div className="line"></div>
          <div className="line"></div>
        </div>
      ) : (
        <div className="btn pllst-pl-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 20 24"
          >
            <path d="M3 22v-20l18 10-18 10z"></path>
          </svg>
        </div>
      )}
    </div>
  );
}

export default AlbumPlayButton;
