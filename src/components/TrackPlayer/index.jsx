import { Player } from "App";
import { ALBUMS } from "constants";
import { Heart } from "icons";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Controller from "./Controller";

import "./TrackPlayer.scss";

const SONGS = ALBUMS[0].items;
function TrackPlayer() {
  const { playingSong } = useContext(Player);

  const song = SONGS.find(({ id }) => id === playingSong.id);

  if (!song)
    return (
      <Controller
        visible={false}
        renderAudio={(attrs) => {
          return (
            <audio id="playing-song" preload="metadata" {...attrs}>
              This is an audio
            </audio>
          );
        }}
      />
    );

  return (
    <div className="fxd player-container">
      <div className="pln-sng_container">
        <div
          className="image"
          style={{ backgroundImage: "url(../images/cover1.jpg)" }}
        ></div>
        <div className="sng-title-container">
          <Link to="/" className="sng-nme">
            {song.songName}
          </Link>
          <div>
            <Link to="/" className="artists">
              {song.artists}
            </Link>
          </div>
        </div>
        <div className="fvrt-dlt-btns">
          <div className="icon fvrt-icon" title="Save to Your Library">
            <Heart />
          </div>
          <div className="icon dlt-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248 248-111.034 248-248S392.967 8 256 8zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676zM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676z"></path>
            </svg>
          </div>
        </div>
      </div>
      <Controller
        renderAudio={(attrs) => {
          return (
            <audio id="playing-song" preload="metadata" {...attrs}>
              This is an audio
            </audio>
          );
        }}
      />

      <div className="extensions-block">lack tf of icons</div>
    </div>
  );
}

export default TrackPlayer;
