import React, { createContext, useReducer } from "react";
import { baseURL } from "./../../config";
import axios from "axios";

export const CommentsContext = createContext();

const commentsReducer = (state, action) => {
  const { type, payload } = action; // Type of action, payload => the info
  switch (type) {
    case "GET_COMMENTS_BY_ID":
      state = payload;
      break;
    case "DELETE_ALL_COMMENTS":
      state = payload;

      break;
    default:
      break;
  }
  return state;
};

const CommentsProvider = ({ children }) => {
  const [comments, dispacth] = useReducer(commentsReducer, []);

  // === SAVE THE COMMENTS === //
  const getComments = async (comments) => {
    const result = await axios.post(`${baseURL}`, comments);
  };

  // === GET_COMMENTS_BY_ID === //
  const getCommentsById = async (id) => {
    const result = await axios.get(`${baseURL}/${id}`);
    const { data } = result;
    console.log(data);
    dispacth({
      type: "GET_COMMENTS_BY_ID",
      payload: data,
    });
  };

  // === DELETE ALL COMMENTS === //
  const deleteComments = async () => {
    const result = await axios.delete(`${baseURL}`);
    const { data } = result;
    dispacth({ type: "DELETE_ALL_COMMENTS", payload: data });
  };

  return (
    <CommentsContext.Provider
      value={{ comments, getComments, getCommentsById, deleteComments }}
    >
      {children}
    </CommentsContext.Provider>
  );
};
export default CommentsProvider;
