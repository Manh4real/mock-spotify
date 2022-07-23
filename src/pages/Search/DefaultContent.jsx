import React from "react";
import { Link } from "react-router-dom";

// icons
import { LeftArrow, Play as PlayIcon, RightArrow } from "icons";

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
                  <Link to="/artists/" className="author">
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
                  <PlayIcon />
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
                  <Link to="/artists/" className="author">
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
                  <PlayIcon />
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
                  <Link to="/artists/" className="author">
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
                  <PlayIcon />
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
            <LeftArrow />
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
            <RightArrow />
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
