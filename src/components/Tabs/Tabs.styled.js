import React from 'react'
import styled, {css} from 'styled-components'

const DefaultStyledTabs = styled.nav`
display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
padding-left: 0;
margin-bottom: 0;
list-style: none;
border-bottom: 1px solid #dee2e6;
`

const DefaultStyledTabsLink = styled.a`
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  margin-bottom: -1px;
  display: block;
  padding: 0.5rem 1rem;

  &:hover {
    border-color: #e9ecef #e9ecef #dee2e6;
  }
`
const StyledTabsLinkDisabled = styled(DefaultStyledTabsLink)(props => props.disabled && css`
   &&, &&:hover {
     color: #6c757d;
     background-color: transparent;
     border-color: transparent;
   }
`)

const StyledTabsLink = styled(StyledTabsLinkDisabled)(props => props.active && css`
  &&, &&:hover {
    color: #495057;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
  }  
`)


const StyledTabsChild = styled.div`
  display: ${props => props.active ? 'block' : 'none'}
`
const StyledTabs = DefaultStyledTabs

export { StyledTabs, StyledTabsChild, StyledTabsLink }