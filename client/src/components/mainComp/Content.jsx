import React from "react";
import { useContext, useEffect } from "react";
import "../css/content.css";
import { ScrollersContext } from "./../context/scrollers";
import { CommentsContext } from "./../context/Comments";

const Content = () => {
  const { contentRef, aboutRef } = useContext(ScrollersContext);
  const { comments } = useContext(CommentsContext);
  useEffect(() => {}, [comments]);
  return (
    <div ref={contentRef} className="contentSpace">
      <div className="headerSpace1">
        <h2>User Posts</h2>
      </div>
      <div className="commentsSpace">
        {comments.map((c) => {
          return (
            <div className="comment" key={c.id}>
              <p className="desc">User ID</p>
              <p className="userId">{c.userId}</p>
              <p className="desc">Title</p>
              <p className="title">{c.title}</p>
              <p className="desc">Post body</p>
              <p className="body">{c.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
