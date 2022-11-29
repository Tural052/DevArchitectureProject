import React, { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const body = document.querySelector('body');
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const body = document.querySelector('body');
    let resizeWindow = () => {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        body,
        windowHeight,
        windowHeight,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
