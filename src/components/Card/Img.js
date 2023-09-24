import React from "react";
import StyledImg from "./styled/Img.styled";

const Img = ({ variant, src, alt }) => {
  return <StyledImg variant={variant} src={src} alt={alt} />;
};

export default Img;
