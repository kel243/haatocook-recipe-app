import React, { useRef, useEffect, useState } from "react";
import TopBar from "./TopBar";
import styled from "styled-components";
import emptyHeart from "../img/empty-heart.png";
import heart from "../img/heart.png";

const RecipeViewer = ({ currentRecipe, setCurrentRecipe }) => {
  const [favorites, setFavorites] = useState([]);
  const heartRef = useRef(null);

  useEffect(() => {
    if (localStorage.getItem("favorites")) {
      const storedFav = localStorage.getItem("favorites");
      setFavorites(JSON.parse(storedFav));
    }
  }, []);

  useEffect(() => {
    if (heartRef.current) heartRef.current.src = emptyHeart;
    if (favorites && currentRecipe) {
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
        setFavorites([...favorites, currentRecipe]);
        localStorage.setItem("favorites", JSON.stringify(favorites));
      } else {
        setFavorites([currentRecipe]);
        localStorage.setItem("favorites", JSON.stringify(favorites));
      }
    } else {
      heartRef.current.src = emptyHeart;
      let arr = favorites;
      const index = findUnfavorite(arr);
      arr = arr.splice(index, 1);
      setFavorites(
        favorites.filter((favorite) => favorite.uri !== currentRecipe.uri)
      );
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };

  if (currentRecipe) {
    return (
      <ViewerStyle>
        <TopBar favorites={favorites} setCurrentRecipe={setCurrentRecipe} />
        <RecipeBoxStyle>
          <ImgStyle src={currentRecipe.image} />
          <Description>
            <Title>
              <h2>{currentRecipe.label}</h2>
              <FavButton onClick={clickHandler}>
                <img ref={heartRef} src={emptyHeart} alt="Favorite Heart" />
              </FavButton>
            </Title>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            similique qui impedit fugit quidem? Provident quasi non fugit
            aliquid unde dolore dignissimos adipisci quo in maxime, quaerat
            ducimus cupiditate. Aut. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Harum similique qui impedit fugit quidem?
            Provident quasi non fugit aliquid unde dolore dignissimos adipisci
            quo in maxime, quaerat ducimus cupiditate. Aut. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Harum similique qui impedit
            fugit quidem? Provident quasi non fugit aliquid unde dolore
            dignissimos adipisci quo in maxime, quaerat ducimus cupiditate. Aut.
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

export default RecipeViewer;
