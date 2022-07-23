import React, { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

// icons
import { DownArrow, ShareIcon } from "icons";

function AccountButton() {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleClick = () => {
    setOpenDropdown((prev) => !prev);
  };

  return (
    <div className="usr-accnt-info__container">
      <div
        className={clsx("usr-accnt-info", {
          active: openDropdown,
        })}
        onClick={handleClick}
      >
        <div
          className="image"
          style={{ backgroundImage: "url(../images/cover1.jpg)" }}
        ></div>
        <div className="usr-nme">manh4L</div>
        <div className="down-arrow">
          <DownArrow />
        </div>
      </div>

      <div className="drop-down usr-stt-drop-down">
        <ul>
          <li>
            <Link to="/">Account</Link>
            <span className="icon share-icon">
              <ShareIcon />
            </span>
          </li>
          <li>
            <Link to="/">Profile</Link>
          </li>
          <li>
            <Link to="/">Private session</Link>
          </li>
          <li>
            <Link to="/">Settings</Link>
          </li>
          <li>
            <Link to="/">Account</Link>
          </li>
          <li className="log-out-ctn">
            <Link to="/">Log out</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AccountButton;
