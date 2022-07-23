import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// api
import { getAlbum } from "api";

// icons
import { DownloadIcon, Heart } from "icons";

// components
import PlaylistSearchBar from "./Playlist/PlaylistSearchBar";
import AlbumPlayButton from "./Playlist/AlbumPlayButton";
import PlaylistHeader from "pages/Playlist/Header";
import PlaylistRow from "./Playlist/PlaylistRow";
import Skeleton from "./Playlist/Skeleton";
import More from "./Playlist/More";

// utils
import { formatMinute, timeToString, truncate } from "utils";

function AlbumPlaylist() {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    const fetchAlbum = async () => {
      const data = await getAlbum(id);

      setAlbum(data);
    };

    fetchAlbum();
  }, [id]);

  if (!album) return <Skeleton />;

  return (
    <div id="playlist-dpl-pg" className="album-pg-bl">
      <div className="bg-pllst-cvr-inf_ctn">
        <div className="bg-pllst-cvr-inf">
          <div
            className="image bg-cvr"
            style={{ backgroundImage: `url(${album.images[0].url})` }}
          ></div>
          <div className="info-text">
            <h3 className="lst-type">{album.type}</h3>
            <h1 className="lst-tp-nme" title={album.name}>
              {truncate(album.name, 27)}
            </h1>
            <Link to="/" className="artists-nme">
              {album.artists.map((artist) => artist.name).join(", ")}
            </Link>
            <div className="md-fr-txt">
              Made for
              <Link
                to="/"
                className="user-name"
                style={{ marginInline: "3px" }}
              >
                manh4L
              </Link>
              &middot;
              <span style={{ color: "#fff", marginInline: "3px" }}>
                {album.total_tracks} songs,
              </span>
              {timeToString(
                album.tracks.items.reduce(
                  (acc, { duration_ms }) => acc + duration_ms,
                  0
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="content-container">
        <div className="top-btn-ctn">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <AlbumPlayButton albumId={album.id} />
            <div>
              <div className="icon fvrt-icon" title="Save to Your Library">
                <Heart />
              </div>
              <div className="icon download-icon">
                <DownloadIcon />
              </div>
              <More />
            </div>
          </div>
          <PlaylistSearchBar />
        </div>

        <div className="sngs-playlist-container">
          <PlaylistHeader />

          {album.tracks.items.map((song, i) => {
            return (
              <PlaylistRow
                key={i}
                explicit={song.explicit}
                songId={song.id}
                songName={song.name}
                albumId={album.id}
                albumName={album.name}
                artists={song.artists}
                songUrl={null}
                duration={formatMinute(song.duration_ms / 1000)}
                imageSrc={album.images[0].url}
                i={i}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AlbumPlaylist;
