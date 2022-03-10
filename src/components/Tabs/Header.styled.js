import styled, { css } from 'styled-components';

const Header = styled.nav`
    border-bottom: 1px solid ${({ theme }) => theme.color.dark.bg};
    color: #007bff;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin-bottom: 0;
    padding-left: 0;
`;

const Title = styled.a`
    border-bottom: 1px solid #dee2e6;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    border: 1px solid transparent;
    cursor: pointer;
    display: block;
    margin-bottom: -1px;
    padding: 0.5rem 1rem;

    ${props =>
        props.isActive &&
        css`
            background-color: #fff;
            border-color: #dee2e6 #dee2e6 #fff;
            color: #495057 !important;
        `}
`;

export { Header, Title };
