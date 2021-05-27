
import styled from 'styled-components';

	const DefaultAlert = styled.div`
    display: block;	 
    color: #004085;
    border-color:#b8daff;
    border-radius: .25rem;
    border: 1px solid #b8daff;
    margin-bottom: 1rem;
    padding: .75rem 1.25rem;
    position: relative;
    
`

const StyledAlert = styled(DefaultAlert)`
    background-color: ${props =>  props.theme && props.variant ? props.theme[props.variant] : "#cce5ff"};
  
`	


export { StyledAlert };  

