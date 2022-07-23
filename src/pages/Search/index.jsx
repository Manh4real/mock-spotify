import React, { Fragment, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

// components
import SearchSongResultRow from "./SearchSongResultRow";
import DefaultContent from "./DefaultContent";
import VBox from "components/VBox";

// styles
import "./Search.scss";

// api
import { search } from "api";

function Search() {
  const [searchParams] = useSearchParams();
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    const getSearchResults = async () => {
      const result = await search({
        q: searchParams.get("q"),
        type: "album,artist,playlist,track,show,episode",
      });

      setSearchResult(result);
    };
    if (searchParams.get("q")) {
      getSearchResults();
    } else {
      setSearchResult(null);
    }
  }, [searchParams]);

  return (
    <div id="search-pg" className="search-pg-bl">
      {!searchResult ? (
        <DefaultContent />
      ) : (
        <Fragment>
          <div className="search-result-section">
            <h1>Songs</h1>
            <div>
              {searchResult.tracks.items.slice(0, 6).map((track, i) => {
                return <SearchSongResultRow key={i} track={track} />;
              })}
            </div>
          </div>
          <div className="search-result-section">
            <h1>Albums</h1>
            <div className="grid vboxes-container">
              {searchResult.albums.items.slice(0, 6).map((album, i) => {
                return (
                  <VBox
                    type="album"
                    key={i}
                    href={"/playlist/" + album.id}
                    id={album.id}
                    img={album.images[0].url}
                    title={album.name}
                  >
                    <p className="author align-center">
                      <span>{new Date(album.release_date).getFullYear()}</span>
                      <span
                        style={{
                          display: "inline-block",
                          minWidth: "4.5px",
                          width: "4.5px",
                          height: "4.5px",
                          background: "currentColor",
                          borderRadius: "50%",
                          marginInline: "4px",
                        }}
                      ></span>
                      <span className="text-overflow-ellipse">
                        {album.artists.map((artist) => artist.name).join(", ")}
                      </span>
                    </p>
                  </VBox>
                );
              })}
            </div>
          </div>
          <div className="search-result-section">
            <h1>Artists</h1>
            <div className="grid vboxes-container">
              {searchResult.artists.items.slice(0, 6).map((artist, i) => {
                return (
                  <VBox
                    type="artist"
                    key={i}
                    href={"/artists/" + artist.id}
                    id={artist.id}
                    img={artist.images[0]?.url || "./images/default-user.png"}
                    title={artist.name}
                  >
                    <p className="author">Artist</p>
                  </VBox>
                );
              })}
            </div>
          </div>
        </Fragment>
      )}
      {/* <script>
    let prevArr;
    let i = 0;
    const d = document.querySelector(".tp-gnr");

    let leftBtn = document.querySelector(".tp-gnr-ctn .arrow.left-arrow");
    let rightBtn = document.querySelector(".tp-gnr-ctn .arrow.right-arrow");

    leftBtn.onclick = slideLeft;
    rightBtn.onclick = slideRight;

    function slideLeft() {
      const cds = d.getBoundingClientRect();
      const cc = d.lastElementChild.getBoundingClientRect();
      const w = +this.dataset.i * (166 + 20) * 2;

      if (cc.right - innerWidth >= -(30 + 17)) {
        i = i + w;
        d.style.transform = `translateX(${i}px)`;
      }
    }
    function slideRight() {
      const cds = d.getBoundingClientRect();
      const cc = d.lastElementChild.getBoundingClientRect();
      const w = +this.dataset.i * (166 + 20) * 2;

      if (cds.left < 172 + 30) {
        i = i + w;
        d.style.transform = `translateX(${i}px)`;
      }
    }
  </script> */}
    </div>
  );
}

export default Search;
