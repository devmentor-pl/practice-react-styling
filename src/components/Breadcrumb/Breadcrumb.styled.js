import styled from 'styled-components';

const StyledBreadcrumb = styled.ol`
    background-color: #e9ecef;
    padding: 0.75rem 1rem;
    width: 100%;
    border-radius: 0.25rem;
    display: flex;
    gap: 1rem;

    li {
        list-style-type: none;
        position: relative;

        &:not(:last-of-type)::after {
            content: '/';
            position: absolute;
            right: -0.7rem;
            color: #6c757d;
        }
    }
`;

export default StyledBreadcrumb;
