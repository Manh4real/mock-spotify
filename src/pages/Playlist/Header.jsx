import React, { useEffect, useState } from "react";

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
    <div className={"sng-grid lst-head-ctn" + (isSticked ? " sticked" : "")}>
      <div className="frst-col ctgr">
        <span className="order-nd-plBtn">#</span>
        Title
      </div>
      <div className="snd-col alb">Album</div>
      <div className="thrd-col duration">
        <div className="icon clock-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 12v-6h-2v8h7v-2h-5z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Header;
