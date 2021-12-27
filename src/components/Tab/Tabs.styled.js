import styled from 'styled-components';

const DefaultStyledTabs  = styled.ul`
    display: flex;
    margin: 0px;
    padding: 0px;
    list-style: none;
`

const StyledTabs = styled(DefaultStyledTabs)(props=> props.style); 

export { StyledTabs}