import React, { useContext, useState } from "react";
import axios from "axios";
import { ScrollersContext } from "./../context/scrollers";
import { CommentsContext } from "./../context/Comments";
import "../css/welcome.css";

const Welcome = () => {
  const { homeRef, contentClick } = useContext(ScrollersContext);
  const { getComments, getCommentsById } = useContext(CommentsContext);
  const [input, setInput] = useState();
  const getAllComments = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    getComments(result.data);
  };
  const getSpecificUserComments = async () => {
    if (input) {
      getCommentsById(input);
      contentClick();
    } else {
      alert("input must be legal userID");
    }
  };
  return (
    <div ref={homeRef} className="welcomeSpace">
      <div className="welcomeHeaderSpace">
        <h1>WELCOME</h1>
      </div>
      <div className="getCommentsSpace">
        <p>Press to get all Posts to DataBase</p>
        <button id="getCommentsBtn" onClick={() => getAllComments()}>GET</button>
      </div>
      <div className="getUserPosts">
        <label htmlFor="userID">User ID</label>
        <input
          onChange={(e) => setInput(e.target.value)}
          placeholder="Insert user ID"
          min={0}
          max={10}
          type="number"
        />
        <button onClick={() => getSpecificUserComments()}>
          Get user posts
        </button>
      </div>
    </div>
  );
};

export default Welcome;
