import React, { useContext } from "react";

import { Pause, Play } from "icons";
import { Player } from "App";
// import { TrackController } from "./Controller";

function PlayController({ onPlay, onPause }, ref) {
  const { isPlaying, setIsPlaying } = useContext(Player);

  // const [pause, setPause] = useState(!isPlaying);

  const handleClick = () => {
    if (!isPlaying) {
      onPlay();
      setIsPlaying(true);
    } else {
      onPause();
      setIsPlaying(false);
    }
  };

  return (
    <div ref={ref} className="btn play-btn" onClick={handleClick}>
      {!isPlaying ? <Play /> : <Pause />}
    </div>
  );
}

export default React.memo(React.forwardRef(PlayController));
