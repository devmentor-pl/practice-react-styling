import { css } from "styled-components";

export default {
    primary: css`
        background-color: #3cb371;
        color: #fff;
        &:hover {
            background-color: #2f8d59;
        }
        &:active {
            background-color: #1c5435;
        }
    `,
    secondary: css`
        background-color: #86c5da;
        color: #fff;
        &:hover {
            background-color: #5fb2ce;
        }
        &:active {
            background-color: #4ba9c8;
        }
    `,
    disabled: css`
        background-color: lightgray;
        color: grey;
    `,
    lg: css`
        padding: 0.5rem 1rem;
        font-size: 1.25rem;
        line-height: 1.5;
        border-radius: 0.3rem;
    `,
    sm: css`
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
        line-height: 1.5;
        border-radius: 0.2rem;
    `,
};
