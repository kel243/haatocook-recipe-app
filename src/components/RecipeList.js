import React from "react";
import styled from "styled-components";

const RecipeList = () => {
  return <ListStyle></ListStyle>;
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 85%;
  overflow: auto;
`;

export default RecipeList;
