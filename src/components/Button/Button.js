import React from "react";
import ButtonStyled from "./Button.styled";

const Button = (props) => {

const {variant, size, disabled, active} = props


    return(
       <ButtonStyled active={active} disabled = {active ? false : disabled} size = {size} variant = {variant}>{props.children}</ButtonStyled>
    )
}

export default Button