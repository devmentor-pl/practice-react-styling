import styled, {css} from "styled-components";

export const TabsItem = styled.div`
  border-bottom: 1px solid #dee2e6;
 
`;

export const StyledTab = styled.button`
  z-index: 100;
  border: none;
  outline: block;
  cursor: pointer;
  padding: 8px 16px;
  width: 25%;
  position: relative;
  color: #495057;
  color: ${props => (props.disabled ? "#495057" : null)};
  font-size: 1em;
  background-color: white;
  transition: background-color 0.5s ease-in-out;
  border: 1px solid white;
  border-top-left-radius: .25rem;
  border-top-right-radius: .25rem;
  border: 1px solid transparent;
  

  ${props =>
      props.active &&
      css`
        color: inherit;
        margin-bottom: -3px;
        height: 2.8rem;
        background-color: white;
        border-color: #e9ecef #e9ecef transparent;

      `};

    }
    :focus {
      outline: 0;
    }

 
`
export const StyledContent = styled.div`
  color: black
  ${props => (props.active ? "" : "display:none")}
  

`;
