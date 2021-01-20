import {css} from 'styled-components';

export default {
    primary: css`
        color: #fff;
        background-color: #007bff; //zapisać to normalnie z myślinikiem tutaj ;)
        border-color: #007bff;
        &:hover {
            color: #fff;
            background-color: #0069d9;
            border-color: #0062cc;
        }
        &:focus {
            outline: none;
            color: #fff;
            background-color: #0069d9;
            border-color: #0062cc;
            box-shadow: 0 0 0 0.2rem rgba(38,143,255,.5);
        }
    `,
    lg: css`
        padding: .5rem 1rem;
        font-size: 1.25rem;
        line-height: 1.5;
        border-radius: .3rem;
    `,
    darken: css`
        background-color: #0069d9;
        border-color: #0062cc;
    `,
    lighten: css`
        opacity: .65;
    `,
    disabled: css`
        pointer-events: none;
    `
}