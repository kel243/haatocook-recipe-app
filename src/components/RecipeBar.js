import React from "react";
import styled from "styled-components";
import RecipeList from "./RecipeList";

const RecipeBar = () => {
  return (
    <RecipeListStyle>
      <SearchContainer />
      <RecipeList />
      <Pagination />
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
`;

const Pagination = styled.div`
  height: 5%;
  width: 100%;
  background: #ffe1ac;
`;

export default RecipeBar;
