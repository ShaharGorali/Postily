import { createContext, useRef } from "react";

export const ScrollersContext = createContext();
function ScrollersProvider(props) {
  const { children } = props;

  const homeRef = useRef(null);
  const homeClick = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const aboutRef = useRef(null);
  const aboutClick = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const contentRef = useRef(null);
  const contentClick = () => {
    contentRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <ScrollersContext.Provider
      value={{
        homeRef,
        homeClick,
        aboutRef,
        aboutClick,
        contentRef,
        contentClick,
      }}
    >
      {children}
    </ScrollersContext.Provider>
  );
}
export default ScrollersProvider;
