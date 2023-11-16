import styled from 'styled-components';

const StyledAlert = styled.div`
    width: 100%;
    height: 75%;
    padding:13px;
    border-radius:5px;
    ${props => {
    const {variant} = props;
        return props.theme[variant]
    }};
`
const themeSettings = {
    primary: {
        color: 'darkblue',
        border: '1px solid rgb(184, 218, 255)',
        backgroundColor:'rgb(204, 229, 255)',
    },
    secendary: {
        color: 'black',
        border: '1px solid rgb(211,214,216)',
        backgroundColor:' rgb(245, 247, 250)',
    },
};


export { StyledAlert, themeSettings };