import React from "react";

// components
import PlaylistSearchBar from "./PlaylistSearchBar";
import PlaylistHeader from "./Header";

// icons
import { Heart } from "icons";

function Skeleton() {
  return (
    <div id="playlist-dpl-pg" className="album-pg-bl hidden">
      <div className="bg-pllst-cvr-inf_ctn">
        <div className="bg-pllst-cvr-inf">
          <div className="image bg-cvr skeleton"></div>
          <div className="info-text">
            <div
              className="lst-type skeleton"
              style={{
                background: "#6279a0",
                height: "13px",
                borderRadius: "5px",
                width: "100px",
              }}
            ></div>
            <div
              className="lst-tp-nme skeleton"
              style={{
                background: "#6279a0",
                height: "40px",
                marginBlock: "40px",
                borderRadius: "5px",
                width: "500px",
              }}
            ></div>
            <div
              className="artists-nme skeleton"
              style={{
                background: "#6279a0",
                height: "13px",
                borderRadius: "5px",
                marginBlock: "10px",
                width: "100px",
              }}
            ></div>
            <div
              className="md-fr-txt skeleton"
              style={{
                background: "#6279a0",
                height: "13px",
                borderRadius: "5px",
                width: "100px",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="content-container">
        <div className="top-btn-ctn">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div></div>
          </div>
          <PlaylistSearchBar />
        </div>

        <div className="sngs-playlist-container">
          <PlaylistHeader />

          {[1, 2, 3].map((_, i) => {
            return (
              <div key={i} className="sng-grid sng-inf-ctn">
                <div className="frst-col odr-cvr-ttl-ctn">
                  <div className="order-nd-plBtn"></div>
                  <div className="image sng-cvr"></div>
                  <div>
                    <div className="song-name"></div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <div className="song-artists"></div>
                    </div>
                  </div>
                </div>
                <div className="snd-col alb-nme-ctn"></div>
                <div className="thrd-col drtn-fvrt-mre-ctn">
                  <div
                    className="flt appeared-on-hover icon fvrt-icon"
                    title="Save to Your Library"
                  >
                    <Heart />
                  </div>
                  <div className="flt song-duration"></div>
                  <div className="flt appeared-on-hover icon more-icon"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skeleton;
