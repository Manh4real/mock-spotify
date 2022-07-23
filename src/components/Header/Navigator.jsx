import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useNavigationType } from "react-router-dom";
import clsx from "clsx";

// icons
import { LeftArrow, RightArrow } from "icons";

// constants
const SESSION_BROWSED_HISTORY = "myMockSpotify_browsedHistory";

function Navigator() {
  const storedHistory = JSON.parse(
    sessionStorage.getItem(SESSION_BROWSED_HISTORY)
  );

  const navigate = useNavigate();
  const navigationType = useNavigationType();
  const location = useLocation();

  const [history, setHistory] = useState(
    storedHistory || {
      paths: [location.pathname + location.search],
      current: 0,
    }
  );

  const handleNext = () => {
    if (history.current >= history.paths.length - 1) {
      return;
    }

    setHistory(({ paths, current }) => ({ paths, current: current + 1 }));
    navigate(1, { replace: true });
  };
  const handleBack = () => {
    if (history.current <= 0) {
      return;
    }

    setHistory(({ paths, current }) => ({ paths, current: current - 1 }));
    navigate(-1, { replace: true });
  };

  useEffect(() => {
    const currentPath = location.pathname + location.search;

    if (navigationType === "PUSH") {
      setHistory(({ paths, current }) => {
        return {
          paths: [...paths.slice(0, current + 1), currentPath],
          current: current + 1,
        };
      });
    }
  }, [location.pathname, location.search, navigationType]);

  useEffect(() => {
    sessionStorage.setItem(SESSION_BROWSED_HISTORY, JSON.stringify(history));
  }, [history]);

  return (
    <div className="bck-and-frth-arrows">
      <button
        className={clsx("left-arrow arrow", {
          disabled: history.current <= 0,
        })}
        disabled={history.current <= 0}
        onClick={handleBack}
      >
        <LeftArrow />
      </button>
      <button
        className={clsx("right-arrow arrow", {
          disabled: history.current === history.paths.length - 1,
        })}
        disabled={history.current === history.paths.length - 1}
        onClick={handleNext}
      >
        <RightArrow />
      </button>
    </div>
  );
}

export default React.memo(Navigator);
