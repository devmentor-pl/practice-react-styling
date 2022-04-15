import styled from "styled-components";

const StyledAlert = styled.div`
    display: block;
    padding: 12px 20px;
    border-radius: 4px;
    background-color: ${(props) => props.theme.backgroundColor};
    border: 1px solid ${(props) => props.theme.borderColor};
    color: ${(props) => props.theme.textColor};
`;

StyledAlert.defaultProps = {
    theme: {
        backgroundColor: "#cce5fe",
        borderColor: "#b8daff",
        textColor: "#004084",
    },
};

const alertTheme = {
    backgroundColor: "#F8D7D9",
    borderColor: "#f7c8cb",
    textColor: "#831F29",
};

const successTheme = {
    backgroundColor: "#D1E7DD",
    borderColor: "#bae3d1",
    textColor: "#0E5132",
};

export { StyledAlert, alertTheme, successTheme };
