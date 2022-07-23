import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getAlbum } from "api";
import PlaylistHeader from "pages/Playlist/Header";
import AlbumPlayButton from "./Playlist/AlbumPlayButton";
import PlaylistRow from "./Playlist/PlaylistRow";
import { formatMinute } from "components/TrackPlayer/TrackProgress";
import More from "./Playlist/More";
import PlaylistSearchBar from "./Playlist/PlaylistSearchBar";

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

  if (!album) return <div id="playlist-dpl-pg" className="album-pg-bl"></div>;

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
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"></path>
                </svg>
              </div>
              <div className="icon download-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 612 612"
                >
                  <path
                    d="M403.939,295.749l-78.814,78.833V172.125c0-10.557-8.568-19.125-19.125-19.125c-10.557,0-19.125,8.568-19.125,19.125
        v202.457l-78.814-78.814c-7.478-7.478-19.584-7.478-27.043,0c-7.478,7.478-7.478,19.584,0,27.042l108.19,108.19
        c4.59,4.59,10.863,6.005,16.812,4.953c5.929,1.052,12.221-0.382,16.811-4.953l108.19-108.19c7.478-7.478,7.478-19.583,0-27.042
        C423.523,288.29,411.417,288.29,403.939,295.749z M306,0C137.012,0,0,136.992,0,306s137.012,306,306,306s306-137.012,306-306
        S475.008,0,306,0z M306,573.75C158.125,573.75,38.25,453.875,38.25,306C38.25,158.125,158.125,38.25,306,38.25
        c147.875,0,267.75,119.875,267.75,267.75C573.75,453.875,453.875,573.75,306,573.75z"
                  ></path>
                </svg>
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

function truncate(str, num = 20) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

function timeToString(ms) {
  let seconds = ms / 1000;
  const hours = parseInt(seconds / 3600);
  seconds = seconds % 3600;
  const minutes = parseInt(seconds / 60);
  seconds = parseInt(seconds % 60);

  if (hours > 0) return hours + "hr " + minutes + " min";
  return minutes + " min " + seconds + " sec";
}

export default AlbumPlaylist;
