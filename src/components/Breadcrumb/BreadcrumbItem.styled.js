import styled, { css } from "styled-components";

const activeStyle = css`
    color: gray;
`;

const StyledBreadcrumbItem = styled.li`
    margin: 0 5px;
    list-style: none;
    ${(props) => props.active && activeStyle}
`;

export default StyledBreadcrumbItem;
