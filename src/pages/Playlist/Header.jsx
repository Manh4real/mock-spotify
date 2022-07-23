import React, { useEffect, useState } from "react";
import clsx from "clsx";

// icons
import { Clock as ClockIcon } from "icons";

function Header() {
  const [isSticked, setIsSticked] = useState(window.scrollY >= 333);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticked(window.scrollY >= 333);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={clsx("sng-grid lst-head-ctn", { sticked: isSticked })}>
      <div className="frst-col ctgr">
        <span className="order-nd-plBtn">#</span>
        Title
      </div>
      <div className="snd-col alb">Album</div>
      <div className="thrd-col duration">
        <div className="icon clock-icon">
          <ClockIcon />
        </div>
      </div>
    </div>
  );
}

export default Header;
