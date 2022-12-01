import styled from "styled-components";

const ButtonStyled = styled.button`
  display: block;
  border-radius: 5px;
  border: none;
  color: white;
  opacity: ${(props) => props.disabled === true ? '0.5' : '1'};
 font-weight: 400;
 padding: ${(props) =>{
    switch (props.size){
        case "lg":
            return "10px"
            case "sm":
                return "5px"
    }
  }} ;
  font-size: ${(props) =>{
    switch (props.size){
        case "lg":
            return "22px"
            case "sm":
                return "15px"
    }
  }} ;
  background-color: ${(props) => {
    switch (props.variant) {
      case "primary":
        return "#0069D9";
      case "secondary":
        return "#5C636A";
    }

  }};
`;

export default ButtonStyled;
