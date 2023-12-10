import { css } from "styled-components";

export const theme = {
  alert: {
    primary: css`
      color: #004085;
      background-color: #ddf5aa;
      border-color: black;
    `,
    secondary: css`
      color: white;
      background-color: #46afc7;
      border-color: red;
    `,
  },
  button: {
    variant: {
      primary: css`
        color: #fff;
        background-color: #161719;
        border-color: blue;
        &:hover {
          color: #fff;
          background-color: #343a40;
          border-color: skyblue;
        }
      `,
      secondary: css`
        color: #fff;
        background-color: #6c757d;
        border-color: orange;
        &:hover {
          color: #fff;
          background-color: #5a6268;
          border-color: pink;
        }
      `,
    },
    size: {
      lg: css`
        padding: 6px 10px;
        font-size: 16px;
        line-height: 12px;
        border-radius: 6px;
      `,
      sm: css`
        padding: 12px 20px;
        font-size: 14px;
        line-height: 14px;
        border-radius: 12px;
      `,
    },
  },
};

export default theme;