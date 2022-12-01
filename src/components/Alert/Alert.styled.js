import styled from "styled-components";

const StyledAlert = styled.div`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 5px;
  padding: 12px;
  background-color: ${(props) => {
    switch (props.variant) {
      case "primary":
        return "#CFE2FF";
      case "secondary":
        return "#E2E3E5";
      default:
        return "grey";
    }
  }};
`;

export { StyledAlert };
