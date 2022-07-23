import React, { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

// icons
import { ShareIcon, ThreeDots } from "icons";

function More() {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleClick = () => {
    setOpenDropdown((prev) => !prev);
  };

  return (
    <div
      className={clsx("icon more-icon", {
        active: openDropdown,
      })}
      onClick={handleClick}
    >
      <ThreeDots />
      <div className="drop-down more-menu">
        <ul>
          <li>
            <Link to="/">Add to queue</Link>
          </li>
          <li>
            <Link to="/">Go to playlist audio</Link>
          </li>
          <li>
            <Link to="/">Report</Link>
            <span className="icon share-icon">
              <ShareIcon />
            </span>
          </li>
          <li>
            <Link to="/">Add to Library</Link>
          </li>
          <li>
            <Link to="/">Download</Link>
          </li>
          <li className="share-bl">
            <Link to="/">Share</Link>
          </li>
          <li>
            <Link to="/">About recommendations</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default More;
