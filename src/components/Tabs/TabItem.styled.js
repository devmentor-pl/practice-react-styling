import styled, { css } from "styled-components";

const DefaultStyledTabItem = styled.a`
  display: list-item;
  padding: 0.5rem 1rem;
  border: 1px solid transparent;
  background-color: #fff;
  border-color: #fff #fff #fff #fff;
  padding: 0.5rem 1rem;
  border-radius: 5px 5px 0 0;
  cursor: pointer;
`;

const StyledTabItem = styled(DefaultStyledTabItem)`
  ${(props) => {
    const { disabled, eventKey, state } = props;

    if (disabled === true) {
      return {
        cursor: "default",
        border: "1px solid #fff",
        pointerEvents: "none",
        color: "#6d6d6d !important",
      };
    }
    if (eventKey === state) {
      return {
        borderColor: "#dee2e6 #dee2e6 #ffffff #dee2e6",
      };
    }
    if (eventKey !== state) {
      return {
        color: "#007bff !important",
      };
    }
  }}
`;

export { StyledTabItem };
