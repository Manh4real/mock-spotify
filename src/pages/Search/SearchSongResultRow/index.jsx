import ExplicitTag from "components/ExplicitTag";
import { formatMinute } from "components/TrackPlayer/TrackProgress";
import { Heart, Play as PlayIcon, ThreeDots } from "icons";
import React from "react";
import { Link } from "react-router-dom";

import styles from "./SearchSongResult.module.scss";

function SearchSongResultRow({ track }) {
  return (
    <div className={styles["row"]}>
      <div style={{ display: "flex" }}>
        <div className={styles["image"]}>
          <img src={track.album.images[0].url} alt="" />

          <div className={styles["play-btn"]}>
            <PlayIcon />
          </div>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <div className={styles["song-name"]}>{track.name}</div>
        <div className={styles["artists"]}>
          {track.explicit && <ExplicitTag />}
          {track.artists.map((artist, i) => (
            <span key={i}>
              <Link to={"/artists/" + artist.id}>{artist.name}</Link>
              {i < track.artists.length - 1 ? "," : ""}
            </span>
          ))}
        </div>
      </div>
      <div className={styles["rightContainer"]}>
        <span className={styles["favorite-btn"]}>
          <Heart style={{ transform: "scale(0.6)" }} />
        </span>
        <span className={styles["duration"]}>
          {formatMinute(track.duration_ms / 1000)}
        </span>
        <span className={styles["more-btn"]}>
          <ThreeDots width={20} />
        </span>
      </div>
    </div>
  );
}

export default SearchSongResultRow;
