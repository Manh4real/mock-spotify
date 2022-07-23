import clsx from "clsx";
import React, { useState } from "react";
import { Link } from "react-router-dom";

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M6 0l12 12-12 12z" />
          </svg>
        </div>
      </div>

      <div className="drop-down usr-stt-drop-down">
        <ul>
          <li>
            <Link to="/">Account</Link>
            <span className="icon share-icon">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M14 4h-13v18h20v-11h1v12h-22v-20h14v1zm10 5h-1v-6.293l-11.646 11.647-.708-.708 11.647-11.646h-6.293v-1h8v8z" />
              </svg>
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
