import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import RecipeBar from "./components/RecipeBar";
import RecipeViewer from "./components/RecipeViewer";
import styled from "styled-components";

function App() {
  return (
    <MainApp>
      <GlobalStyles />
      <RecipeBar />
      <RecipeViewer />
    </MainApp>
  );
}

const MainApp = styled.div`
  height: 100vh;
  width: 100vw;
  max-height: 800px;
  max-width: 1200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  border-radius: 1rem;
  display: flex;
`;

export default App;
