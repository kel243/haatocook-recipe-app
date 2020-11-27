import React from "react";
import TopBar from "./TopBar";
import styled from "styled-components";

const RecipeViewer = () => {
  return (
    <ViewerStyle>
      <TopBar />
      <ImgStyle />
      <Description>
        <h2>Recipe Name</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum similique
        qui impedit fugit quidem? Provident quasi non fugit aliquid unde dolore
        dignissimos adipisci quo in maxime, quaerat ducimus cupiditate. Aut.
      </Description>
    </ViewerStyle>
  );
};

const ViewerStyle = styled.div`
  height: 100%;
  width: 100%;
  max-width: 75%;
  background: green;
  display: flex;
  flex-direction: column;
`;

const ImgStyle = styled.div`
  height: 60%;
  width: 100%;
  background: blue;
`;

const Description = styled.div`
  width: 100%;
  padding: 3rem;
  background: pink;

  h2 {
    padding-bottom: 1rem;
    font-size: 2rem;
  }
`;

export default RecipeViewer;
