import styled from "styled-components";

const BreadcrumbItemContainer = styled.div`
  display: inline-block;
  margin-right: 0.5rem;
  position: relative;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -0.5rem; 
    transform: translateY(-45%) rotate(20deg);
    width: 1px;
    height: 0.9em;
    background-color: black; 
  }
`;


export default BreadcrumbItemContainer;