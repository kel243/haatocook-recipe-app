import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import RecipeBar from "./components/RecipeBar";
import RecipeViewer from "./components/RecipeViewer";
import styled from "styled-components";
import { FavProvider } from "./contexts/favoritesContext";
import { CurrRecipeProvider } from "./contexts/currRecipeContext";
import { BarRefProvider } from "./contexts/barRefContext";

function App() {
  return (
    <BarRefProvider>
      <CurrRecipeProvider>
        <FavProvider>
          <MainApp>
            <GlobalStyles />
            <RecipeBar />
            <RecipeViewer />
          </MainApp>
        </FavProvider>
      </CurrRecipeProvider>
    </BarRefProvider>
  );
}

const MainApp = styled.div`
  height: 100vh;
  width: 100vw;
  max-height: 800px;
  max-width: 1000px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  border-radius: 1rem;
  display: flex;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 80%;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

export default App;
