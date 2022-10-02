import React from "react";
import styled from "styled-components";

const StyledCardImg = styled.img`
  flex-shrink: 0;
  width: 100%;
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
  vertical-align: middle;
  border-style: none;
`;

const CardImg = ({ src }) => {
  return <StyledCardImg src={src} />;
};

export default CardImg;
