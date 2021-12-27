import styled from 'styled-components';

const DefaultStyledTabContent  = styled.div`

`

const StyledTabContent = styled(DefaultStyledTabContent)(props=> props.style); 

export { StyledTabContent}