import React, { useState } from "react";
import clsx from "clsx";

// icons
import { DownArrow, Search as SearchIcon } from "icons";

function PlaylistSearchBar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((prev) => !prev);
  };

  return (
    <div className="srch-fltr-ctn">
      <div className={clsx("search-ctn", { active })} onClick={handleClick}>
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
          <SearchIcon />
        </div>
      </div>
      <div className="filter-ctn">
        <span style={{ paddingRight: "8px" }}>Custom order</span>
        <div className="icon arrow-down-icon">
          <DownArrow />
        </div>
      </div>
    </div>
  );
}

export default PlaylistSearchBar;
