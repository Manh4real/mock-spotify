import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

// icons
import { Heart, Pause as PauseIcon, Play as PlayIcon, ThreeDots } from "icons";
import ExplicitTag from "components/ExplicitTag";
import { useDispatch, useSelector } from "react-redux";
import {
  getPlayingSong,
  getPlayingStatus,
  pause,
  play,
  setPlayingSongInfo,
} from "features/trackControllerSlice";

function PlaylistRow({
  explicit = false,
  songId,
  songName,
  albumId,
  albumName,
  artists,
  songUrl,
  duration,
  imageSrc,
  i,
}) {
  // Redux Toolkit
  const isPlaying = useSelector(getPlayingStatus);
  const playingSong = useSelector(getPlayingSong);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (songId === playingSong.id) {
      if (isPlaying) dispatch(pause());
      else dispatch(play());
    } else {
      dispatch(
        setPlayingSongInfo({
          id: songId,
          url: songUrl,
          albumId,
        })
      );
      if (!isPlaying) dispatch(play());
    }
  };

  return (
    <div className="sng-grid sng-inf-ctn">
      <div className="frst-col odr-cvr-ttl-ctn">
        <div
          className={clsx("order-nd-plBtn", {
            active: songId === playingSong.id,
            paused: songId === playingSong.id && !isPlaying,
          })}
          onClick={handleClick}
        >
          <span className="sng-order" data-order={i + 1}>
            {i + 1}
          </span>
          <span className="btn play-btn">
            <PlayIcon />
          </span>
          <span className="btn sng-pause-btn">
            <PauseIcon />
          </span>
        </div>
        <div
          className="image sng-cvr"
          style={{
            backgroundImage: `url(${imageSrc})`,
          }}
        ></div>
        <div>
          <div className="song-name">{songName}</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {explicit && <ExplicitTag />}
            {typeof artists === "object" ? (
              artists.map((artist, i) => (
                <a
                  key={i}
                  href={"/artists/" + artist.id}
                  className="song-artists"
                >
                  {artist.name}
                  {i < artists.length - 1 ? "," : ""}
                </a>
              ))
            ) : (
              <Link to="/artist" className="song-artists">
                {artists}
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="snd-col alb-nme-ctn">
        <Link to={"/albums/" + albumId}>{albumName}</Link>
      </div>
      <div className="thrd-col drtn-fvrt-mre-ctn">
        <div
          className="flt appeared-on-hover icon fvrt-icon"
          title="Save to Your Library"
        >
          <Heart />
        </div>
        <div className="flt song-duration">{duration}</div>
        <div className="flt appeared-on-hover icon more-icon">
          <ThreeDots />
        </div>
      </div>
    </div>
  );
}

export default React.memo(PlaylistRow);
