import React from "react";
import Header from "./Header";
import "../css/main.css";
import Content from "./Content";
import Welcome from "./Welcome";

const Main = () => {
  return (
    <div className="mainSpace">
      <Header />
      <Welcome />
      <Content />
    </div>
  );
};

export default Main;
