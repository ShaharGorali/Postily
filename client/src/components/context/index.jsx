import React from "react";
import CommentsProvider from "./Comments";
import ScrollersProvider from "./scrollers";

function Store({ children }) {
  return (
    <ScrollersProvider>
      <CommentsProvider>{children}</CommentsProvider>;
    </ScrollersProvider>
  );
}

export default Store;
