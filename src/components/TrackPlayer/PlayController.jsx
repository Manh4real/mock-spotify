import React from "react";

import { Pause, Play } from "icons";
import { useSelector } from "react-redux";
import { getPlayingStatus } from "features/trackControllerSlice";

function PlayController({ onPlay, onPause }, ref) {
  // Redux Toolkit
  const isPlaying = useSelector(getPlayingStatus);
  // const dispatch = useDispatch();

  const handleClick = () => {
    if (!isPlaying) {
      onPlay();

      // dispatch(play());
    } else {
      onPause();

      // dispatch(pause());
    }
  };

  return (
    <div ref={ref} className="btn play-btn" onClick={handleClick}>
      {!isPlaying ? <Play /> : <Pause />}
    </div>
  );
}

export default React.memo(React.forwardRef(PlayController));
