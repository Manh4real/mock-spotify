import React from "react";
import { useNavigate } from "react-router-dom";

function VBox({ type, img, title, href = "/", children }) {
  const navigate = useNavigate();

  return (
    <div className="vbox-ctn">
      <div
        className="vbox"
        title={title}
        onClick={() => {
          navigate(href);
        }}
      >
        <div
          className="image"
          style={{
            position: "relative",
            backgroundImage: `url(${img})`,
            width: "164px",
            height: "164px",
            borderRadius: type === "artist" ? "50%" : "12px",
          }}
        ></div>
        <div className="artcl-title">
          <h2 className="artcl-nme">{title}</h2>
          {children}
        </div>
      </div>
      <button className="pllst-play-btn">
        <div className="btn lines-ctn" style={{ display: "none" }}>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="btn pllst-pl-btn">
          <svg
            className="play-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 20 24"
          >
            <path d="M3 22v-20l18 10-18 10z"></path>
          </svg>
        </div>
      </button>
    </div>
  );
}

export default VBox;
