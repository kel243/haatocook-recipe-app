import React from "react";
import styled from "styled-components";

const Favorite = ({ favorite, setCurrentRecipe }) => {
  return (
    <FavoriteStyle onClick={() => setCurrentRecipe(favorite)}>
      <p className="name">{favorite.label}</p>
    </FavoriteStyle>
  );
};

const FavoriteStyle = styled.div`
  border-bottom: 1px solid #d6d6d6;
  height: 3.3rem;
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f2ebea;
  }

  .name {
    font-size: 1rem;
    color: black;
    margin: 0 auto;
    width: 250px;
  }
`;

export default Favorite;
