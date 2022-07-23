import React from "react";

function Skeleton() {
  return (
    <div className="vbox-ctn">
      <div className="vbox">
        <div
          className="image skeleton"
          style={{
            position: "relative",
            width: "164px",
            height: "164px",
            borderRadius: "12px",
          }}
        ></div>
        <div className="artcl-title skeleton">
          <div
            className="artcl-nme skeleton"
            style={{
              background: "#2a2a2a",
              height: "13px",
              borderRadius: "5px",
              width: "100%",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Skeleton;
