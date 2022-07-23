import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { Search as SearchIcon } from "icons";

function SearchBar() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const [value, setValue] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setValue(searchParams.get("q") || "");
  }, [searchParams]);

  if (location.pathname !== "/search") return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value) setSearchParams({ q: value });
  };

  return (
    <div className="search-inp-ctn">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Artists, songs, or podcasts"
          onKeyDown={(e) => e.stopPropagation()}
          onKeyUp={(e) => e.stopPropagation()}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button onClick={handleSubmit} className="search-btn">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
