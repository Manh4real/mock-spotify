import React, { useContext } from "react";

// components
import { Player } from "App";

// icons
import { Play as PlayIcon } from "icons";

// constants
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
          <PlayIcon />
        </div>
      )}
    </div>
  );
}

export default AlbumPlayButton;
