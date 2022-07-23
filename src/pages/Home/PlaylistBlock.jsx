import React from "react";
import { Link } from "react-router-dom";

function PlaylistBlock({ j = 0 }) {
  return (
    <div className="pllst-ctn">
      <Link to="/playlist" className="pllst">
        <div
          className="image"
          style={{
            width: "72px",
            height: "72px",
            backgroundImage: `url(./images/cover${++j}.jpg)`,
          }}
        ></div>
        <div className="title-ctn">
          <h3>The Off-Season</h3>
        </div>
      </Link>

      <div className="pllst-play-btn">
        <div className="btn lines-ctn" style={{ display: "none" }}>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="btn pllst-pl-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 20 24"
          >
            <path d="M3 22v-20l18 10-18 10z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default PlaylistBlock;
