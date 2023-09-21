import styled, { css } from "styled-components";

const StyledTab = styled.a.attrs({ href: "#" })`
    display: inline-block;
    padding: 8px 16px;
    margin-bottom: -1px;
    cursor: pointer;
    border: 1px solid transparent;
    text-decoration: none;
    border-radius: 4px;


    &:hover {
     text-decoration: none;
        border: 1px solid ;
        border-color: #dee2e6 #dee2e6 transparent;     
   }
    
   ${props => props.disabled && css`
        color: #6c757d;
        cursor: default;
        &:hover {
          border-color: transparent;
          color: #6c757d
        }
   `}

   ${props => props.active && css`
        color: #495057;
        background-color: #fff;
        border: 1px solid ;
        border-color: #dee2e6 ;
        border-bottom-color: white;
   `}
`


export default StyledTab