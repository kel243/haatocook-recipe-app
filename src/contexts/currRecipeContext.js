import React, { createContext, useState } from "react";

export const CurrRecipeContext = createContext([{}, () => {}]);

export const CurrRecipeProvider = (props) => {
  const [currentRecipe, setCurrentRecipe] = useState({});

  // Make the context object:
  const currRecipeContext = {
    currentRecipe,
    setCurrentRecipe,
  };

  // pass the value in provider and return
  return (
    <CurrRecipeContext.Provider value={currRecipeContext}>
      {props.children}
    </CurrRecipeContext.Provider>
  );
};
