import React from "react";
import "../css/content.css";
import { useContext, useEffect } from "react";
import { ScrollersContext } from "./../context/scrollers";

const About = () => {
  const { aboutRef } = useContext(ScrollersContext);
  return (
    <div
      ref={aboutRef}
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        width: "100%",
      }}
      className="headerSpace1"
    >
      <h2>About us</h2>
      <p style={{ color: "white", fontSize: "15px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        eligendi eius molestias rem, natus rerum, sint ipsum, tvoluptatemempore
        laboriosam blanditiis dignissimos? Reprehenderit deleniti nihil incidunt
        eius. Blanditiis, magnam? Non porro neque consectetur similique quaerat
        assumenda? Rem quam incidunt, excepturi error vel, autem eveniet
        officiis deleniti consectetur ratione reprehenderit tempore sunt commodi
        maxime itaqu accusantium impedit. Qui enim cupiditate delectus non
        accusamus possimus, mollitia, ullam hic nostrum dolore neque veniam est
        quidem in quod blanditiis! Nobis laudantium ducimus excepturi illo
        officia quidem at, debitis illum quam et dolor esse accusamus corporis
        maxime officiis repellendus dolorem. Tempora, perferendis consequuntur
        vero consectetur nemo ad cupiditate dolores magni dolorem.
      </p>
    </div>
  );
};

export default About;
