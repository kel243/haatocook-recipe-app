import React, { useState, useRef, useContext } from "react";
import FavoriteList from "./FavoriteList";
import styled from "styled-components";
import yellowHeart from "../img/yellow-heart.png";
import { BarRefContext } from "../contexts/barRefContext";

const TopBar = () => {
  const [listActive, setListActive] = useState(true);
  const [repActive, setRepActive] = useState(false);
  const { barRef } = useContext(BarRefContext);
  const listRef = useRef(null);

  const favClickHandler = () => {
    setListActive(!listActive);
    if (listActive) {
      listRef.current.style.height = "300px";
      listRef.current.style.width = "200px";
    } else {
      listRef.current.style.height = "0px";
      listRef.current.style.width = "0px";
    }
  };

  const repClickHandler = () => {
    if (!repActive) {
      barRef.current.classList.toggle("barShow");
      setRepActive(true);
    } else {
      barRef.current.classList.toggle("barShow");
      setRepActive(false);
    }
  };

  return (
    <BarStyle>
      <p className="title">HaatoCook</p>
      <RecipesBtn onClick={repClickHandler}>Recipes</RecipesBtn>
      <FavsBtnContainer>
        <button onClick={favClickHandler}>
          <img src={yellowHeart} alt="Favorites button"></img>
        </button>
        <FavoriteList listRef={listRef} />
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

const RecipesBtn = styled.button`
  color: #cb3e4d;
  font-size: 1.2rem;
  padding: 2px 5px;
  background: #fefbfc;
  border: 2px solid #171c23;
  cursor: pointer;
  border-radius: 5px;
  z-index: 5;
  display: none;
  transition: all 0.2s ease;

  :hover {
    background: #171c23;
    color: #fefbfc;
  }

  @media (max-width: 768px) {
    display: inline-block;
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
