import styled, { css } from "styled-components";

const StyledTab = styled.li`
    color: #007BFF; // dlaczego gdy zamiast 'li' jest 'a' nie zmienia koloru?
    display: inline-block;
    padding: 8px 16px;
    margin-bottom: -1px;
    cursor: pointer;
    border: 1px solid transparent;
    text-decoration: none;
    border-radius: 4px;


    &:hover {
        border: 1px solid ;
        border-color: #dee2e6 #dee2e6 transparent;
        
   }
   /* &:active {
        border: 1px solid ;
        border-color: #dee2e6 #dee2e6 #fff;
        border-bottom-color: white;
    } */
   /* &:disabled {
    color:red
   } */ //nie rozumiem dlaczego te selektory nie działają - disabled i active

   ${props => props.disabled && css`
        color: grey;
        cursor: default;
        &:hover {
            border:none;

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