import React from "react";
import styled from "styled-components";
import Recipe from "./Recipe";

const RecipeList = ({ recipes, setCurrentRecipe, currentRecipe }) => {
  return (
    <ListStyle>
      {recipes.map((recipe, index) => (
        <Recipe
          setCurrentRecipe={setCurrentRecipe}
          recipe={recipe.recipe}
          key={`${recipe.recipe.label}-${index}`}
          currentRecipe={currentRecipe}
        >
          {recipe.recipe.label}
        </Recipe>
      ))}
    </ListStyle>
  );
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 85%;
  overflow: auto;
`;

export default RecipeList;
