import React, { useState, useRef } from "react";
import FavoriteList from "./FavoriteList";
import styled from "styled-components";
import yellowHeart from "../img/yellow-heart.png";

const TopBar = ({ favorites, setCurrentRecipe }) => {
  const [listActive, setListActive] = useState(false);
  const listRef = useRef(null);

  const clickHandler = () => {
    setListActive(!listActive);
    if (listActive) {
      listRef.current.style.height = "300px";
      listRef.current.style.width = "200px";
    } else {
      listRef.current.style.height = "0px";
      listRef.current.style.width = "0px";
    }
  };

  return (
    <BarStyle>
      <p className="title">HaatoCook</p>
      <FavsBtnContainer>
        <button onClick={clickHandler}>
          <img src={yellowHeart} alt="Favorites button"></img>
        </button>
        <FavoriteList
          favorites={favorites}
          listRef={listRef}
          setCurrentRecipe={setCurrentRecipe}
        />
      </FavsBtnContainer>
    </BarStyle>
  );
};

const BarStyle = styled.div`
  height: 10%;
  width: 100%;
  background: #cb3e4d;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    color: white;
    font-size: 2.5rem;
    padding: 0 2rem;
  }
`;

const FavsBtnContainer = styled.div`
  width: 35px;
  height: 35px;
  margin-right: 3rem;
  position: relative;

  button {
    width: 35px;
    cursor: pointer;
    border: none;
    height: 35px;
    background: none;

    img {
      width: 35px;
    }
  }
`;

export default TopBar;
