import React, { createContext, useRef } from "react";

export const BarRefContext = createContext({});

export const BarRefProvider = (props) => {
  const barRef = useRef(null);

  // Make the context object:
  const barRefContext = {
    barRef,
  };

  // pass the value in provider and return
  return (
    <BarRefContext.Provider value={barRefContext}>
      {props.children}
    </BarRefContext.Provider>
  );
};
