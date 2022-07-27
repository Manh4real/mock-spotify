import React from "react";

// components

// icons
import { Play as PlayIcon } from "icons";

// constants
import { ALBUMS } from "constants";

// Redux Toolkit
import { useDispatch, useSelector } from "react-redux";
import {
  getPlayingAlbumId,
  getPlayingStatus,
  pause,
  play,
  setPlayingSongInfo,
} from "features/trackControllerSlice";

function AlbumPlayButton({ albumId }) {
  // Redux Toolkit
  const playingAlbumId = useSelector(getPlayingAlbumId);
  const isPlaying = useSelector(getPlayingStatus);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (playingAlbumId === albumId) {
      if (isPlaying) dispatch(pause());
      else dispatch(play());
    } else if (albumId === ALBUMS[0].id) {
      dispatch(
        setPlayingSongInfo({
          id: ALBUMS[0].items[0].id,
          url: ALBUMS[0].items[0].url,
          albumId,
        })
      );
      dispatch(play());
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
