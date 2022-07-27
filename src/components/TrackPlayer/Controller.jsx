import React, { useEffect, useMemo, useRef, useState } from "react";

// icons
import { Next, Prev, Random, Repeat } from "icons";

// components
import PlayController from "./PlayController";
import TrackProgress from "./TrackProgress";

// constants
import { ALBUMS } from "constants";

// context
import { useDispatch, useSelector } from "react-redux";
import { pause, play, setPlayingSongInfo } from "features/trackControllerSlice";

// variables
const SONGS = ALBUMS[0].items;
let currentIndex = 0;

function Controller({ visible = true, renderAudio }) {
  // redux toolkit
  const { isPlaying, playingSong } = useSelector(
    (state) => state.trackController
  );
  const dispatch = useDispatch();

  // state
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
    if (isPlaying) dispatch(pause());

    setIsError(true);
    console.log("Audio Error");

    alert("Can't play the song.");
  };

  //
  const handleAudioPlay = () => {
    if (!isError) {
      console.log("Audio started to play");
      if (!isPlaying) dispatch(play());
    }
  };
  const handleAudioPause = () => {
    console.log("Audio started to pause");
    if (isPlaying) dispatch(pause());
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
    dispatch(
      setPlayingSongInfo({
        id: SONGS[++currentIndex].id,
        url: SONGS[currentIndex].url,
        albumId: ALBUMS[0].id,
      })
    );
    dispatch(play());

    trackProgressRef.current.init(audioRef.current);
  }
  function backToPrevSong() {
    if (currentIndex < 1) currentIndex = 1;

    dispatch(
      setPlayingSongInfo({
        id: SONGS[--currentIndex].id,
        url: SONGS[currentIndex].url,
        albumId: ALBUMS[0].id,
      })
    );
    dispatch(play());

    trackProgressRef.current.init(audioRef.current);
  }

  //
  const toPlaySong = useMemo(
    () =>
      async function () {
        const song = audioRef.current;

        try {
          await song.play();
          console.log("play song...");
        } catch (e) {
          console.log("Something went wrong when playing song.", e.message);

          dispatch(pause());
        } finally {
        }
      },
    [dispatch]
  );

  const toPauseSong = useMemo(
    () =>
      async function () {
        const song = audioRef.current;

        try {
          await song.pause();
          console.log("pause song...");
        } catch (e) {
          console.log("Something went wrong when pausing song.", e.message);

          dispatch(pause());
        } finally {
        }
      },
    [dispatch]
  );

  //
  useEffect(() => {
    if (playingSong.id) {
      // find available song
      const thisSongIndex = SONGS.findIndex(({ id }) => id === playingSong.id);

      if (thisSongIndex !== -1) {
        console.log("current song order: ", currentIndex);
        currentIndex = thisSongIndex;
      } else {
        dispatch(
          setPlayingSongInfo({
            id: "",
            url: "",
            albumId: "",
          })
        );
      }
    }
  }, [playingSong.id, dispatch]);

  //
  useEffect(() => {
    trackProgressRef.current?.setSongVariables(audioRef.current);
  }, []);

  useEffect(() => {
    if (isPlaying) toPlaySong();
    else if (!isPlaying) toPauseSong();

    console.log({ isPlaying });
  }, [isPlaying, toPlaySong, toPauseSong, playingSong.url]);

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
  }, [isPlaying, playingSong.id, toPauseSong, toPlaySong]);

  if (!visible)
    return renderAudio({
      ref: audioRef,
      src: playingSong.url,
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
        src: playingSong.url,
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
