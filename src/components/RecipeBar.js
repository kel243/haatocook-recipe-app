import React, { useState } from "react";
import styled from "styled-components";
import RecipeList from "./RecipeList";

const RecipeBar = ({ setCurrentRecipe, currentRecipe }) => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");

  const endpoint = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&from=0&to=20`;

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  const enterHandler = (e) => {
    if (e.charCode === 13) {
      fetch(endpoint)
        .then((response) => response.json())
        .then((response) => setRecipes(response.hits));
    }
  };

  return (
    <RecipeListStyle>
      <SearchContainer>
        <SearchBar
          type="text"
          placeholder="Search..."
          value={query}
          onChange={changeHandler}
          onKeyPress={enterHandler}
        />
      </SearchContainer>
      <RecipeList
        setCurrentRecipe={setCurrentRecipe}
        currentRecipe={currentRecipe}
        recipes={recipes}
      />
      <RecipeBarBottom />
    </RecipeListStyle>
  );
};

const RecipeListStyle = styled.div`
  height: 100%;
  width: 100%;
  max-width: 25%;
  background: #fefbfc;
`;

const SearchContainer = styled.div`
  height: 10%;
  width: 100%;
  background: #cb3e4d;
  position: relative;
`;

const SearchBar = styled.input`
  width: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 1.2rem;
`;

const RecipeBarBottom = styled.div`
  height: 5%;
  width: 100%;
  background: #ffe1ac;
`;

export default RecipeBar;
