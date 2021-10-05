import React, { createContext, useState, useEffect } from "react";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [english, setEnglish] = useState(true);

  const ChangeLangEn = () => {
    setEnglish(true);
  };

  const ChangeLangEs = () => {
    setEnglish(false);
  };

  return (
    <StoreContext.Provider
      value={{
        english,
        ChangeLangEn,
        ChangeLangEs,
        setEnglish,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
