import styled, {css} from 'styled-components';

const DefaultButton = styled.button`
    background-color: transparent;
    border-radius: .25rem;
    border: 1px solid transparent;
    color: #212529;
    cursor: pointer;
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

function generateStyles(props, propsStyles) {
    let styles = '';
    if(propsStyles && props.theme) {
        const themeRules = props.theme[propsStyles]
        for(const key in themeRules) {
            styles += `
                ${themeRules[key]};
            `
        }
    }
    return css`${styles}`;}

const StyledButton = styled(DefaultButton)`
    ${props => props.variant && generateStyles(props, props.variant)}
    ${props => props.size && generateStyles(props, props.size)}
    ${props => props.disabled && `${generateStyles(props, 'lighten')} ${generateStyles(props, 'disabled')} ` }
    ${props => props.active && `${generateStyles(props, 'darken')}` }
`

export default StyledButton