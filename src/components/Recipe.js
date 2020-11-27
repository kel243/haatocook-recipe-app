import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Recipe = ({ recipe, setCurrentRecipe, currentRecipe }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (currentRecipe && recipe.uri === currentRecipe.uri) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <RecipeStyle
      onClick={() => setCurrentRecipe(recipe)}
      className={active ? "active" : ""}
    >
      <RecipeImgStyle src={recipe.image} />
      <p>{recipe.label}</p>
    </RecipeStyle>
  );
};

const RecipeStyle = styled.div`
  width: 100%;
  height: 4rem;
  text-align: center;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f2ebea;
  }

  p {
    display: inline-block;
    margin: 0 auto;
  }
`;

const RecipeImgStyle = styled.img`
  width: 25%;
  height: 100%;
`;

export default Recipe;
