import React, { createContext, useState } from "react";
export const CursorContext = createContext();

const CursorContextProvider = () => {
  const [cursor, setCursor] = useState({ active: false });
  return (
    <CursorContext.Provider
      value={[cursor, setCursor]}
    ></CursorContext.Provider>
  );
};

export default CursorContextProvider;
