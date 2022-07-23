import React, { useContext } from "react";
import clsx from "clsx";
import { Player } from "App";
import { Heart, ThreeDots } from "icons";
import { Link } from "react-router-dom";

function PlaylistRow({
  explicit = false,
  songId,
  songName,
  albumId,
  albumName,
  artists,
  songUrl,
  duration,
  imageSrc = `./images/cover${Math.ceil(Math.random() * 2)}.jpg`,
  i,
}) {
  // console.log("??");

  const { isPlaying, playingSong, setIsPlaying, setPlayingSongInfo } =
    useContext(Player);

  const handleClick = () => {
    if (songId === playingSong.id) {
      setIsPlaying((prev) => !prev);
    } else {
      // setPlayingSong({ id: songId, src: songUrl });
      setPlayingSongInfo(songId, songUrl, albumId);
      setIsPlaying(true);
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
            <svg
              className="play-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 20 24"
            >
              <path d="M3 22v-20l18 10-18 10z"></path>
            </svg>
          </span>
          <span className="btn sng-pause-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="13.5"
              viewBox="0 0 18 24"
            >
              <rect
                width="7"
                height="24"
                rx="0"
                ry="0"
                transform="matrix(1 0 0 1.236824 12.5 0)"
                stroke="none"
                strokeWidth="0"
              />
              <rect
                width="7"
                height="24"
                rx="0"
                ry="0"
                transform="matrix(1 0 0 1.236824 0 0)"
                stroke="none"
                strokeWidth="0"
              />
            </svg>
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
            {explicit && (
              <span
                style={{
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "#a3a1a1",
                  color: "#111",
                  borderRadius: "2px",
                  width: 15,
                  height: 15,
                  fontSize: 9,
                  fontWeight: "bold",
                }}
              >
                E
              </span>
            )}
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
              <Link
                to={i}
                replace={true}
                href={"/artist"}
                className="song-artists"
              >
                {artists}
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="snd-col alb-nme-ctn">
        <Link to="/">{albumName}</Link>
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
