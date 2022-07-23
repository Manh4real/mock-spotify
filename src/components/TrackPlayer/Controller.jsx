import React, { useContext, useEffect, useRef, useState } from "react";

// icons
import { Next, Prev, Random, Repeat } from "icons";

// components
import PlayController from "./PlayController";
import TrackProgress from "./TrackProgress";

// constants
import { ALBUMS } from "constants";

// context
import { Player } from "App";

// variables
const SONGS = ALBUMS[0].items;
let currentIndex = 0;

function Controller({ visible = true, renderAudio }) {
  const { isPlaying, setIsPlaying, playingSong, setPlayingSongInfo } =
    useContext(Player);

  const [isError, setIsError] = useState(false);

  const audioRef = useRef();
  const trackProgressRef = useRef();

  const getSongDuration = () => {
    return audioRef.current?.duration;
  };
  const getCurrentSongTime = () => {
    return audioRef.current?.currentTime;
  };
  const setCurrentSongTime = (time) => {
    audioRef.current.currentTime = time;
  };
  const handleLoadedMetaData = (e) => {
    trackProgressRef.current.setSongVariables(audioRef.current);

    console.log("audio loaded");
  };

  const handleTimeUpdate = (e) => {
    trackProgressRef.current?.updateSongTime(audioRef.current);
  };
  const handleAudioError = () => {
    setIsPlaying(false);
    setIsError(true);
    console.log("Audio Error");

    alert("Can't play the song.");
  };

  //
  const handleAudioPlay = () => {
    if (!isError) setIsPlaying(true);
  };
  const handleAudioPause = () => {
    setIsPlaying(false);
  };
  const handleAudioEnded = () => {
    trackProgressRef.current.init(audioRef.current);
    turnToNextSong();
  };

  // SWITCH SONGS
  function turnToNextSong() {
    if (currentIndex >= SONGS.length - 1) {
      currentIndex = -1;
    }
    setPlayingSongInfo(
      SONGS[++currentIndex].id,
      SONGS[currentIndex].url,
      ALBUMS[0].id
    );

    trackProgressRef.current.init(audioRef.current);
  }
  function backToPrevSong() {
    if (currentIndex < 1) currentIndex = 1;

    setPlayingSongInfo(
      SONGS[--currentIndex].id,
      SONGS[currentIndex].url,
      ALBUMS[0].id
    );

    trackProgressRef.current.init(audioRef.current);
  }

  //
  async function toPlaySong() {
    const song = audioRef.current;
    console.log("play song...");

    try {
      await song.play();
    } catch (e) {
      console.log("Something went wrong when playing song.", e.message);
      setIsPlaying(false);
    } finally {
    }
  }

  async function toPauseSong() {
    const song = audioRef.current;
    console.log("pause song...");

    try {
      await song.pause();
    } catch (e) {
      console.log("Something went wrong when pausing song.", e.message);
      setIsPlaying(false);
    } finally {
    }
  }

  //
  useEffect(() => {
    if (playingSong.id) {
      // find available song
      const thisSongIndex = SONGS.findIndex(({ id }) => id === playingSong.id);

      if (thisSongIndex !== -1) {
        console.log("current song order: ", currentIndex);
        currentIndex = thisSongIndex;
      } else {
        setPlayingSongInfo("", "", "");
      }
    }
  }, [playingSong.id, setPlayingSongInfo]);

  //
  useEffect(() => {
    trackProgressRef.current?.setSongVariables(audioRef.current);
  }, []);

  useEffect(() => {
    if (isPlaying) toPlaySong();
    else if (!isPlaying) toPauseSong();

    console.log({ isPlaying });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying, playingSong.src]);

  //
  useEffect(() => {
    const handleKeyUp = (e) => {
      e.preventDefault();

      if (e.key === " ") {
        if (playingSong.id) {
          if (!isPlaying) toPlaySong();
          else toPauseSong();
        }
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === " ") {
        e.preventDefault();
      }
    };

    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("keydown", handleKeyDown);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  if (!visible)
    return renderAudio({
      ref: audioRef,
      src: playingSong.src,
      onLoadedMetadata: handleLoadedMetaData,
      onTimeUpdate: handleTimeUpdate,
      onPlay: handleAudioPlay,
      onPause: handleAudioPause,
      onEnded: handleAudioEnded,
      onError: handleAudioError,
    });

  return (
    <div className="cntrlr-ctn">
      <div className="cntrl-btns">
        <div className="btn float random-play-btn" title="Shuffle">
          <Random />
        </div>
        <div className="float main-cntrl-btns">
          <div className="btn prev-btn" onClick={backToPrevSong}>
            <Prev />
          </div>
          <PlayController onPlay={toPlaySong} onPause={toPauseSong} />
          <div className="btn next-btn" onClick={turnToNextSong}>
            <Next />
          </div>
        </div>
        <div className="btn float repeat-btn" title="Repeat">
          <Repeat />
        </div>
      </div>
      <TrackProgress
        ref={trackProgressRef}
        setCurrentSongTime={setCurrentSongTime}
        getCurrentSongTime={getCurrentSongTime}
        getSongDuration={getSongDuration}
      />
      {renderAudio({
        ref: audioRef,
        src: playingSong.src,
        onLoadedMetadata: handleLoadedMetaData,
        onTimeUpdate: handleTimeUpdate,
        onPlay: handleAudioPlay,
        onPause: handleAudioPause,
        onEnded: handleAudioEnded,
        onError: handleAudioError,
      })}
    </div>
  );
}

export default React.memo(Controller);
