import { propTypes } from 'react-bootstrap/esm/Image';
import styled, { css } from 'styled-components';


const StyledAlert = styled.div`
    border: 1px solid #000;
    border-radius: 5px;
    background-color: #fff;
    color: #000;
    padding: 0.8rem 1.2rem;
    width: calc(100% - 20px);
    margin: 12px 10px;
    font-size: 16px;
    ${ ({variant, theme}) => {
        const {backgroundColor, color, borderColor} = theme[variant] || {};

        return css`
            background-color: ${backgroundColor};
            color: ${color};
            border-color: ${borderColor};
        `;
        }
    };
`

export { StyledAlert };