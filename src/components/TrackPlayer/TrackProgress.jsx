import React, {
  forwardRef,
  memo,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import clsx from "clsx";

function TrackProgress({ getCurrentSongTime, setCurrentSongTime }, ref) {
  const [time, setTime] = useState(getCurrentSongTime() || 0);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const tracktorRef = useRef();

  const handlePlaybackChange = (e) => {
    const coords = tracktorRef.current.getBoundingClientRect();
    const TRACKTOR_LENGTH = tracktorRef.current.offsetWidth;
    const mouseX = e.pageX;
    const tracktorLeft = coords.left;

    let offset = mouseX - tracktorLeft;

    if (offset < 0) {
      offset = 0;
    }
    if (offset > TRACKTOR_LENGTH) offset = TRACKTOR_LENGTH;

    setCurrentSongTime((offset * duration) / TRACKTOR_LENGTH);
    setProgress((offset / TRACKTOR_LENGTH) * 100);
  };

  //
  useImperativeHandle(ref, () => ({
    setSongVariables: (song) => {
      setDuration(song.duration);
    },
    init: (song) => {
      setProgress(0);
      setCurrentSongTime(0);
      // setDuration(song.duration);
    },
    updateSongTime: (song) => {
      if (!isMouseDown) {
        const currentTime = getCurrentSongTime();
        setProgress((currentTime / duration) * 100);
        setTime(currentTime);
      }
    },

    isMouseDown,
  }));

  useEffect(() => {
    const currentTime = getCurrentSongTime();
    setProgress((currentTime / duration) * 100);
  }, [getCurrentSongTime, duration]);

  //
  useEffect(() => {
    let newTime;

    const handleDrag = (e) => {
      const coords = tracktorRef.current.getBoundingClientRect();
      const TRACKTOR_LENGTH = tracktorRef.current.offsetWidth;
      const mouseX = e.pageX;
      const tracktorLeft = coords.left;

      let offset = mouseX - tracktorLeft;

      if (offset < 0) {
        offset = 0;
      }
      if (offset > TRACKTOR_LENGTH) offset = TRACKTOR_LENGTH;

      newTime = (offset * duration) / TRACKTOR_LENGTH;
      setProgress((offset / TRACKTOR_LENGTH) * 100);
      setTime(newTime);
    };
    const handleMouseUp = () => {
      setIsMouseDown(false);
      setCurrentSongTime(newTime || 0);
    };

    if (isMouseDown) {
      window.addEventListener("mousemove", handleDrag);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleDrag);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMouseDown]);

  return (
    <div
      className={clsx("trcktr-container", {
        "on-change": isMouseDown,
      })}
      onClick={handlePlaybackChange}
      onMouseDown={() => {
        setIsMouseDown(true);
      }}
    >
      <div className="timer cur-time">{formatMinute(time)}</div>
      <div ref={tracktorRef} className="trcktr">
        <div className="progress" style={{ width: progress + "%" }}></div>
      </div>
      <div className="timer duration">{formatMinute(duration || 0)}</div>
    </div>
  );
}

export default memo(forwardRef(TrackProgress));

export function formatMinute(s) {
  let minutes = Math.trunc(s / 60);
  let seconds = Math.trunc(s % 60);

  return minutes + ": " + padStart(seconds);
}

function padStart(n) {
  return n >= 10 ? n : "0" + n;
}
