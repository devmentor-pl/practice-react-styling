import styled from "styled-components";

export const TabsItem = styled.div`
  overflow: hidden;
  background: #fff;
  height: 2.5em;
  border-bottom: 1px solid #dee2e6;
  margin-top: ${props => (props.active ? "-3px" : null)};
`;

export const TabItem = styled.button`
  z-index: 100;
  /* margin-bottom: ${props => (props.active ? "2px" : null)}; */
  /*nie usuwa mi się dony border, nie wiem jak to zrobić */


  border: none;
  outline: block;
  cursor: pointer;
  width: 25%;
  position: relative;
  color: #007bff;
  color: ${props => (props.active ? "#495057" : "#007bff")};
  color: ${props => (props.disabled ? "#495057" : null)};
  margin-right: 0.1em;
  font-size: 1em;
  padding: .5rem 1rem;
  border-top: ${props => (props.active ? "1px solid #495057": null)};
  border-right: ${props => (props.active ? "1px solid #495057": null)};
  border-left: ${props => (props.active ? "1px solid #495057": null)};
  /* border-bottom: ${props => (props.active ? "1px solid #FFFFFF" : "1px solid #dee2e6")}; */
  background-color: white;
  transition: background-color 0.5s ease-in-out;
  border: 1px solid white;
  border-top-left-radius: .25rem;
  border-top-right-radius: .25rem;


  :hover {
    border-color: #e9ecef;
    border-bottom-color: #dee2e6;
    text-decoration: none; 
    color: #495057;

  }
  :focus {
    outline: 0;
  }

 
`;

export const Content = styled.div`
  ${props => (props.active ? "" : "display:none")}
  

`;
