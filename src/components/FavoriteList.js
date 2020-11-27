import React from "react";
import styled from "styled-components";
import Favorite from "./Favorite";

const FavoriteList = ({ favorites, listRef, setCurrentRecipe }) => {
  let content;

  if (favorites) {
    content = (
      <FavListStyle ref={listRef}>
        {favorites.map((favorite) => (
          <Favorite
            key={favorite.uri}
            favorite={favorite}
            setCurrentRecipe={setCurrentRecipe}
          />
        ))}
      </FavListStyle>
    );
  } else {
    content = (
      <FavListStyle ref={listRef}>
        <span>No Favorites</span>
      </FavListStyle>
    );
  }

  return <>{content}</>;
};

const FavListStyle = styled.div`
  position: absolute;
  top: 17.5px;
  right: 17.5px;
  background: #fefbfc;
  height: 0px;
  width: 0px;
  border-radius: 5px;
  overflow: auto;
  transition: all 0.2s ease;

  span {
    font-size: 1.2rem;
    display: block;
    text-align: center;
  }
`;

export default FavoriteList;
