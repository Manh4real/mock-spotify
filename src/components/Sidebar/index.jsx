import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Sidebar.scss";
import { Book, Home as HomeIcon, Logo, Search as SearchIcon } from "icons";

function Sidebar() {
  return (
    <div className="fxd side-bar">
      <div className="menu-container">
        <Link
          to="https://spotify.com"
          target="_blank"
          className="mn-inl-bl logo"
          rel="noreferrer"
        >
          <Logo />
        </Link>
        <div className="main-menu-content">
          <NavLink to="/" replace={true} className="mn-inl-bl mn-item home">
            {({ isActive }) => {
              return (
                <>
                  <HomeIcon filled={isActive} /> Home
                </>
              );
            }}
          </NavLink>
          <NavLink
            to="/search"
            replace={true}
            className="mn-inl-bl mn-item search"
          >
            {({ isActive }) => {
              return (
                <>
                  <SearchIcon filled={isActive} /> Search
                </>
              );
            }}
          </NavLink>
          <NavLink
            to="/library"
            replace={true}
            className="mn-inl-bl mn-item library"
          >
            {({ isActive }) => {
              return (
                <>
                  <Book filled={isActive} /> Your Library
                </>
              );
            }}
          </NavLink>
        </div>
        <div style={{ marginTop: "25px" }}>
          <Link
            to="/create-playlist"
            replace={true}
            className="mn-inl-bl mn-item crt-pllst"
          >
            Create Playlist
          </Link>
          <Link
            to="/liked-songs"
            replace={true}
            className="mn-inl-bl mn-item crt-pllst"
          >
            Liked Songs
          </Link>
        </div>
        <div className="seperator"></div>
        <div className="my-pllsts-container">
          <Link to="/" className="mn-inl-bl mn-item my-pllst">
            <span>The Off-Season</span>
          </Link>
          <Link to="/" className="mn-inl-bl mn-item my-pllst">
            <span>DAMN.</span>
          </Link>
          <Link to="/" className="mn-inl-bl mn-item my-pllst">
            <span>Certified Lover Boy by Drake</span>
          </Link>
          <Link to="/" className="mn-inl-bl mn-item my-pllst">
            <span>This is Bill Withers</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Sidebar);
