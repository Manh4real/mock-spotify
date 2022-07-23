import clsx from "clsx";
import React, { useState } from "react";

function PlaylistSearchBar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((prev) => !prev);
  };

  return (
    <div className="srch-fltr-ctn">
      <div
        className={clsx("search-ctn", {
          active,
        })}
        onClick={handleClick}
      >
        <div className="search-sng-pllst-form">
          <input
            type="text"
            name="search"
            id="search-pllst-sng"
            placeholder="Search in Playlist"
            autoComplete="off"
          />
        </div>
        <div className="icon search-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" />
          </svg>
        </div>
      </div>
      <div className="filter-ctn">
        <span style={{ paddingRight: "8px" }}>Custom order</span>
        <div className="icon arrow-down-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M6 0l12 12-12 12z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default PlaylistSearchBar;
