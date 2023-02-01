import React from "react";
import Header from "./Header";
import "../css/main.css";
import Content from "./Content";
import Welcome from "./Welcome";
import About from "./About";

const Main = () => {
  return (
    <div className="mainSpace">
      <Header />
      <Welcome />
      <Content />
      <About />
    </div>
  );
};

export default Main;
