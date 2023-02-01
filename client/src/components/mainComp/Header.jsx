import React from "react";
import { useContext } from "react";
import { ScrollersContext } from "../context/scrollers";
import "../css/header.css";

const Header = () => {
  const {
    homeRef,
    homeClick,
    profileRef,
    profileClick,
    contentRef,
    contentClick,
  } = useContext(ScrollersContext);
  return (
    <div className="headerSpace">
      <h2 id="logo" onClick={homeClick}>POSTILY</h2>
      <a onClick={contentClick}>Our Posts</a>
      <a onClick={profileClick}>About us</a>
    </div>
  );
};

export default Header;
