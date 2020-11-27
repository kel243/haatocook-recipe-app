import React from "react";
import FavoriteList from "./FavoriteList";
import styled from "styled-components";

const TopBar = () => {
  return (
    <BarStyle>
      <FavoriteList />
    </BarStyle>
  );
};

const BarStyle = styled.div`
  height: 10%;
  width: 100%;
  background: #cb3e4d;
`;

export default TopBar;
