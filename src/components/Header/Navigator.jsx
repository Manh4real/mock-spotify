import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useNavigationType } from "react-router-dom";

function Navigator() {
  const navigate = useNavigate();
  const navigationType = useNavigationType();
  const location = useLocation();
  const [history, setHistory] = useState({
    paths: [location.pathname + location.search],
    current: 0,
  });

  const handleNext = () => {
    if (history.current >= history.paths.length - 1) return;

    setHistory(({ paths, current }) => ({ paths, current: current + 1 }));
    navigate(history.paths[history.current + 1], { replace: true });
  };
  const handleBack = () => {
    if (history.current <= 0) return;
    setHistory(({ paths, current }) => ({ paths, current: current - 1 }));
    navigate(history.paths[history.current - 1], { replace: true });
  };

  console.log(history);
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

    console.log("damned.");
  }, [location.pathname, location.search, navigationType]);

  return (
    <div className="bck-and-frth-arrows">
      <button
        className={clsx("left-arrow arrow", {
          disabled: history.current <= 0,
        })}
        disabled={history.current <= 0}
        onClick={handleBack}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        </svg>
      </button>
      <button
        className={clsx("right-arrow arrow", {
          disabled: history.current === history.paths.length - 1,
        })}
        disabled={history.current === history.paths.length - 1}
        onClick={handleNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        </svg>
      </button>
    </div>
  );
}

export default React.memo(Navigator);
