import styled, { css } from 'styled-components';

const DefaultStyledCardImg = styled.img`
    vertical-align: middle;
    border-style: none;
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
    flex-shrink: 0;
    width: 100%;
`;

const StyledCardImg = styled(DefaultStyledCardImg)`
    ${(props) => {
        return {
            content: 'url({ src })',
        };
    }}
`;

export { StyledCardImg };