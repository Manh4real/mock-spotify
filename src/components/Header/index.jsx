import React, { useEffect, useState } from "react";
import clsx from "clsx";

// components
import SearchBar from "components/SearchBar";
import Navigator from "./Navigator";
import AccountButton from "./AccountButton";

// styles
import "./Header.scss";

function Header() {
  const [isSticked, setIsSticked] = useState(window.scrollY >= 50);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticked(window.scrollY >= 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={clsx("fxd top-header", {
        active: isSticked,
      })}
    >
      <div style={{ display: "flex" }}>
        <Navigator />
        <SearchBar />
      </div>

      <AccountButton />
    </div>
  );
}

export default Header;
