import styled, {css} from "styled-components";


const DefaultStyledCardImg = styled.img`
    flex-shrink: 0;
    width: 100%;
    ${ ({variant}) => {
        variant && css`
        ${`border-${variant}-left-radius`}: calc(0.25rem - 1px);
        ${`border-${variant}-right-radius`}: calc(0.25rem - 1px);
        `
    }}
`

const StyledCardImg = styled(DefaultStyledCardImg)(
    ({style}) => style
)


export default StyledCardImg