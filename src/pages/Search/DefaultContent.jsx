import React from "react";
import { Link } from "react-router-dom";

function DefaultContent() {
  return (
    <div>
      <div className="rcnt-srch-ctn">
        <div className="rcnt-srch_title">
          <Link to="/">Recent searches</Link>
          <Link
            to="/"
            style={{
              fontWeight: 100,
              fontSize: "13px",
              fontFamily: "Arial, Helvetica, sans-serif",
              position: "absolute",
              right: 0,
            }}
          >
            SEE ALL
          </Link>
        </div>
        <div className="grid vboxes-container">
          <div style={{ position: "relative" }}>
            <div className="btn remove-btn">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" />
              </svg>
            </div>
            <div className="vbox-ctn">
              <div className="vbox">
                <div
                  className="image"
                  style={{
                    backgroundImage: "url(./images/cover2.jpg)",
                    width: "164px",
                    height: "164px",
                    borderRadius: "12px",
                  }}
                ></div>
                <div className="artcl-title">
                  <h2 className="artcl-nme">Motivational Podcasts</h2>
                  <Link to="/artists/" replace={true} className="author">
                    Tolu Dave
                  </Link>
                </div>
              </div>
              <div className="pllst-play-btn">
                <div className="btn lines-ctn" style={{ display: "none" }}>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
                <div className="btn pllst-pl-btn">
                  <svg
                    className="play-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 20 24"
                  >
                    <path d="M3 22v-20l18 10-18 10z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div className="btn remove-btn">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" />
              </svg>
            </div>
            <div className="vbox-ctn">
              <div className="vbox">
                <div
                  className="image"
                  style={{
                    backgroundImage: "url(./images/cover2.jpg)",
                    width: "164px",
                    height: "164px",
                    borderRadius: "12px",
                  }}
                ></div>
                <div className="artcl-title">
                  <h2 className="artcl-nme">Motivational Podcasts</h2>
                  <Link to="/artists/" replace={true} className="author">
                    Tolu Dave
                  </Link>
                </div>
              </div>
              <div className="pllst-play-btn">
                <div className="btn lines-ctn" style={{ display: "none" }}>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
                <div className="btn pllst-pl-btn">
                  <svg
                    className="play-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 20 24"
                  >
                    <path d="M3 22v-20l18 10-18 10z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div className="btn remove-btn">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" />
              </svg>
            </div>
            <div className="vbox-ctn">
              <div className="vbox">
                <div
                  className="image"
                  style={{
                    backgroundImage: "url(./images/cover2.jpg)",
                    width: "164px",
                    height: "164px",
                    borderRadius: "12px",
                  }}
                ></div>
                <div className="artcl-title">
                  <h2 className="artcl-nme">Motivational Podcasts</h2>
                  <Link to="/artists/" replace={true} className="author">
                    Tolu Dave
                  </Link>
                </div>
              </div>
              <div className="pllst-play-btn">
                <div className="btn lines-ctn" style={{ display: "none" }}>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
                <div className="btn pllst-pl-btn">
                  <svg
                    className="play-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 20 24"
                  >
                    <path d="M3 22v-20l18 10-18 10z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tp-gnr-ctn">
        <div className="title">
          <h1>Your top genres</h1>
        </div>
        <div style={{ position: "relative" }}>
          <button className="arrow left-arrow" data-i="-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"></path>
            </svg>
          </button>
          <div style={{ overflowX: "hidden" }}>
            <div className="grid tp-gnr">
              <Link to="/" className="gnr-ctn yll-brn">
                <div>
                  <h1>Hip Hop</h1>
                </div>
              </Link>
              <Link to="/" className="gnr-ctn purple-ish">
                <div>
                  <h1>Pop</h1>
                </div>
              </Link>
              <Link to="/" className="gnr-ctn blue-ish">
                <div>
                  <h1>Indie</h1>
                </div>
              </Link>
              <Link to="/" className="gnr-ctn pink-ish">
                <div>
                  <h1>Hip Hop</h1>
                </div>
              </Link>
              <Link to="/" className="gnr-ctn white">
                <div>
                  <h1>Hip Hop</h1>
                </div>
              </Link>
            </div>
          </div>
          <button className="arrow right-arrow" data-i="1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="brs-all-ctn">
        <div className="title">
          <h1>Browse all</h1>
        </div>
        <div className="grid brs-all">
          <Link to="/" className="bl">
            <h1>Hip Hop</h1>
          </Link>
          <Link to="/" className="bl">
            <h1>Hip Hop</h1>
          </Link>
          <Link to="/" className="bl">
            <h1>Hip Hop</h1>
          </Link>
          <Link to="/" className="bl">
            <h1>Hip Hop</h1>
          </Link>
          <Link to="/" className="bl">
            <h1>Hip Hop</h1>
          </Link>
          <Link to="/" className="bl">
            <h1>Hip Hop</h1>
          </Link>
          <Link to="/" className="bl">
            <h1>Hip Hop</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DefaultContent;
