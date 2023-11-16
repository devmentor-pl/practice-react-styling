import React, {useState, useEffect} from 'react';
import styled, {css} from 'styled-components';

const StyledSection = styled.section `
    width:100%;
    height:100%;
`

const StyledHeader = styled.header`
    width:100%;
    height:30%;
`

const StyledNav = styled.nav `
    width:100%;
    height:100%;
`

const StyledUl = styled.ul `
    display:flex;
    justify-content:flex-start;
    align-items:center;
    width:100%;
    height:100%;
    padding-left:0rem;
    list-style:none;
`

const StyledLi = styled.li `
    display:flex;
    justify-content:center;
    align-items:center;
    width:15%;
    height:100%;
    background-color:white;
    border-radius:5px 5px 0 0;
    cursor:pointer;
    color:rgb(0,123,255);
    ${({disabled})=>{ return disabled && css`
        color:rgb(153,160,173);
        pointer-events: none;
    `}}
    ${({isActive})=>{ return isActive && css`
        border:1px solid rgb(226,227,229);
        border-bottom: none;
        margin-bottom:-2px;
        color:rgb(120,122,125);
        `}}
    &:hover{
        border:1px solid rgb(226,227,229);
        border-bottom: none;
        color:blue;
    }
    `

const StyledArticle = styled.article `
    width:100%
    height:70%;
    border:transparent;
    border-top:1px solid rgb(226,227,229);
    & p{
        padding-top:2px;
    }
`

const Tabs = ({ defaultActiveKey='', children }) => {
    const [eventKey, setEventKey] = useState(null);
    useEffect(() => {
        setEventKey(defaultActiveKey);
    },[])
  return (
    <StyledSection>
        <StyledHeader>
            <StyledNav>
                <StyledUl>
                      {React.Children.map(children, child => (
                          <StyledLi isActive={child.props.eventKey === eventKey} onClick={()=>setEventKey(child.props.eventKey)} {...child.props}>{child.props.title}</StyledLi>
                      ))}
                </StyledUl>
            </StyledNav>
        </StyledHeader>
        <StyledArticle>
              {React.Children.map(children, child => {
                  if (child.props.eventKey === eventKey) {
                      return <p>{child.props.children}</p>
                  }
              })}
        </StyledArticle>
    </StyledSection>
  )
}

export default Tabs;
