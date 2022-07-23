import clsx from "clsx";
import React, { useState } from "react";
import { Link } from "react-router-dom";

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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="6px"
        viewBox="0 0 24 6"
      >
        <circle cx="3" cy="3" r="1.5" />
        <circle cx="11" cy="3" r="1.5" />
        <circle cx="19" cy="3" r="1.5" />
      </svg>
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
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M14 4h-13v18h20v-11h1v12h-22v-20h14v1zm10 5h-1v-6.293l-11.646 11.647-.708-.708 11.647-11.646h-6.293v-1h8v8z"></path>
              </svg>
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
