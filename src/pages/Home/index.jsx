import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// components
import PlaylistBlock from "./PlaylistBlock";
import Skeleton from "components/VBox/Skeleton";
import VBox from "components/VBox";

// api
import { getRandomAlbums } from "api";

// styles
import "./Home.scss";

function Home() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const getPlaylists = async () => {
      const data = await getRandomAlbums();
      setAlbums(data);
    };
    getPlaylists();
  }, []);

  return (
    <div id="main" className="home-pg-bl">
      {/* <div className="emp-ctn-ad-bl">
        <div className="ad-container"></div>
      </div> */}
      <div className="content-container">
        <div className="pllst-sggstn_container">
          <div className="pllst-sggstn">
            <div className="title">
              <h1>Good Morning</h1>
            </div>
            <div className="grid playlists">
              {[1, 2, 3].map((_, j) => {
                return <PlaylistBlock key={j} j={j} />;
              })}
              {[1, 2, 3].map((_, j) => {
                return <PlaylistBlock key={j} j={j} />;
              })}
            </div>
          </div>
        </div>

        <div>
          <h1 className="title">
            <Link to="/">
              Popular with listeners of Weekly Motivation by Ben Lionel Scott
            </Link>
            <Link to="/" className="see-all-btn">
              SEE ALL
            </Link>
          </h1>
          <div className="grid vboxes-container">
            {albums.length <= 0
              ? [1, 2, 3, 4, 5, 6].map((_, i) => <Skeleton key={i} />)
              : albums.map((album, i) => {
                  const artists = album.artists.map((artist, i) => (
                    <Fragment key={i}>
                      <a
                        href={"/artists/" + artist.id}
                        style={{
                          fontSize: "14px",
                          color: "#b3b3b3",
                          fontWeight: "500",
                        }}
                      >
                        {artist.name}
                      </a>
                      {i < album.artists.length - 1 ? ", " : ""}
                    </Fragment>
                  ));
                  const artistsString = album.artists
                    .map((artist) => artist.name)
                    .join(", ");
                  const year = new Date(album.release_date).getFullYear();

                  return (
                    <VBox
                      type="album"
                      key={i}
                      href={"/playlist/" + album.id}
                      id={album.id}
                      img={album.images[0].url}
                      title={album.name}
                    >
                      <p
                        className="author align-center"
                        title={year + " - " + artistsString}
                      >
                        <span>{year}</span>
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
                        <span
                          className="text-overflow-ellipse"
                          style={{
                            lineHeight: "1.8",
                          }}
                        >
                          {artists}
                        </span>
                      </p>
                    </VBox>
                  );
                })}
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default Home;
