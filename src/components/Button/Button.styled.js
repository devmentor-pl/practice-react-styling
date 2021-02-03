import styled, {css} from 'styled-components';


const DefaultButton = styled.button`
    background-color: transparent;
    border-radius: .25rem;
    border: 1px solid transparent;
    color: #212529;
    display: inline-block;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    padding: .375rem .75rem;
    text-align: center;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    user-select: none;
    vertical-align: middle;
 ` 
    function generateStyles(props) {
    let styles = '';

        if(props.variant && props.theme && props.size) {
      
            for(const key in props.theme[props.variant] && props.theme[props.size]) {
                for(const key in props.theme[props.variant]) {
                    styles += `
                  ${props.theme[props.variant][key]} 
                  `
                } 
                for(const key in props.theme[props.size]) {
                    styles += `
                  ${props.theme[props.size][key]} 
                  `
                } 
            
            }   
        }
        return css `${styles}`
    }
    

   const StyledButton = styled(DefaultButton)`
        ${generateStyles}
  
`



export { StyledButton }
