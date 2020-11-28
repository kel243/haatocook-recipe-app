import React, { useRef, useEffect, useContext } from "react";
import TopBar from "./TopBar";
import styled from "styled-components";
import emptyHeart from "../img/empty-heart.png";
import heart from "../img/heart.png";
import { FavContext } from "../contexts/favoritesContext";
import { CurrRecipeContext } from "../contexts/currRecipeContext";

const RecipeViewer = () => {
  const heartRef = useRef(null);
  const { favorites, dispatch } = useContext(FavContext);
  const { currentRecipe } = useContext(CurrRecipeContext);

  useEffect(() => {
    if (heartRef.current) heartRef.current.src = emptyHeart;
    if (favorites && currentRecipe && heartRef.current) {
      for (let i = 0; i < favorites.length; i++) {
        if (favorites[i].uri === currentRecipe.uri) {
          heartRef.current.src = heart;
          break;
        } else {
          heartRef.current.src = emptyHeart;
        }
      }
    }
  }, [currentRecipe, favorites]);

  const findUnfavorite = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].uri === currentRecipe.uri) {
        return i;
      }
    }
  };

  const clickHandler = () => {
    if (heartRef.current.src === emptyHeart) {
      heartRef.current.src = heart;
      if (favorites.length > 0) {
        dispatch({ type: "ADD_FAV", recipe: currentRecipe });
      } else {
        dispatch({ type: "ADD_FAV", recipe: currentRecipe });
      }
    } else {
      heartRef.current.src = emptyHeart;
      let arr = favorites;
      const index = findUnfavorite(arr);
      arr = arr.splice(index, 1);
      dispatch({ type: "REMOVE_FAV", recipe: currentRecipe });
    }
  };

  if (Object.keys(currentRecipe).length !== 0) {
    return (
      <ViewerStyle>
        <TopBar />
        <RecipeBoxStyle>
          <ImgStyle src={currentRecipe.image} />
          <Description>
            <Title>
              <h2>{currentRecipe.label}</h2>
              <FavButton onClick={clickHandler}>
                <img ref={heartRef} src={emptyHeart} alt="Favorite Heart" />
              </FavButton>
            </Title>
            <RecipeDetails>
              <RecipeInfo>
                <p>Servings: {currentRecipe.yield}</p>
                <p>Calories: {+currentRecipe.calories.toFixed(0)}</p>
                {currentRecipe.dietLabels.map((label, index) => (
                  <p key={`dietlabel-${index}`}>{label}</p>
                ))}
              </RecipeInfo>
              <RecipeInfo>
                {currentRecipe.healthLabels.map((label, index) => (
                  <HealthLabel key={`healthlabel-${index}`}>
                    {label}
                  </HealthLabel>
                ))}
              </RecipeInfo>
            </RecipeDetails>
            <IngredientsList>
              <h3>Ingredients:</h3>
              {currentRecipe.ingredientLines.map((ingredient, index) => (
                <li key={`ingredient-${index}`}>
                  <span>&#9679;</span> {ingredient}
                </li>
              ))}
            </IngredientsList>
          </Description>
        </RecipeBoxStyle>
      </ViewerStyle>
    );
  } else {
    return (
      <ViewerStyle>
        <TopBar />
        <h1>Select a recipe</h1>
      </ViewerStyle>
    );
  }
};

const ViewerStyle = styled.div`
  height: 100%;
  width: 100%;
  max-width: 75%;
  background: white;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const RecipeBoxStyle = styled.div`
  height: 100%;
  width: 100%;
  background: white;
  overflow: scroll;
  display: flex;
  flex-direction: column;
`;

const ImgStyle = styled.img`
  height: 70%;
  width: 100%;
  background-size: cover;
  background-position: center;
`;

const Description = styled.div`
  width: 100%;
  padding: 3rem 3rem 8rem 3rem;
  background: white;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    padding-bottom: 1rem;
    font-size: 2rem;
  }
`;

const FavButton = styled.button`
  background: none;
  border: none;
  height: 30px;
  cursor: pointer;

  img {
    height: 30px;
  }
`;

const RecipeDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #ffe1ac;
  padding: 1rem 0.2rem 0 0.2rem;
  border-radius: 5px;
  margin-bottom: 1rem;
`;

const RecipeInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  p {
    display: inline-block;
    font-weight: 700;
    margin-bottom: 1rem;
  }
`;

const HealthLabel = styled.p`
  border: 2px solid black;
  padding: 1px 4px;
  border-radius: 5px;
  color: white;
  background: #cb3e4d;
`;

const IngredientsList = styled.ul`
  width: 100%;
  font-size: 1.2rem;
  list-style: none;

  h3 {
    color: #cb3e4d;
    margin-bottom: 0.3rem;
  }

  li {
    padding: 0.5rem 0;

    span {
      color: #cb3e4d;
    }
  }
`;

export default RecipeViewer;
