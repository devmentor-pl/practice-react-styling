import styled from 'styled-components';

const Navigation = styled.nav`
    border-bottom: 1px solid ${({ theme }) => theme.color.dark.bg};
    color: #007bff;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin-bottom: 0;
    padding-left: 0;
`;

export default Navigation;
