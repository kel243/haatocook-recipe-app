import React, { useState, useContext } from "react";
import styled from "styled-components";
import RecipeList from "./RecipeList";
import { BarRefContext } from "../contexts/barRefContext";

const RecipeBar = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const { barRef } = useContext(BarRefContext);

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
    <RecipeListStyle className="barHidden" ref={barRef}>
      <SearchContainer>
        <SearchBar
          type="text"
          placeholder="Search..."
          value={query}
          onChange={changeHandler}
          onKeyPress={enterHandler}
        />
      </SearchContainer>
      <RecipeList recipes={recipes} />
      <RecipeBarBottom>
        <p>{recipes.length} Results Found</p>
      </RecipeBarBottom>
    </RecipeListStyle>
  );
};

const RecipeListStyle = styled.div`
  height: 100%;
  width: 100%;
  max-width: 25%;
  background: #fefbfc;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 100%;
    z-index: 3;
  }
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

  @media (max-width: 768px) {
    width: 40%;
    left: 30%;
  }
`;

const RecipeBarBottom = styled.div`
  height: 5%;
  width: 100%;
  background: #ffe1ac;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-weight: 700;
  }
`;

export default RecipeBar;
