
import styled from 'styled-components';

	const DefaultAlert = styled.div`
    display: block;	 
    border-color: #b8daff;
    border-radius: .25rem;
    border: 1px solid transparent;
    color: #004085;
    margin-bottom: 1rem;
    padding: .75rem 1.25rem;
    position: relative;
    
`

const StyledAlert = styled(DefaultAlert)`
    background-color: ${props =>  props.theme && props.variant ? props.theme[props.variant] : "#D3D3D3"};
`	


export { StyledAlert };  

