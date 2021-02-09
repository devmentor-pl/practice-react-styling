import styled from 'styled-components';

const StyledBreadcrumb = styled.ol`
    background-color: #e9ecef;
    border-radius: .25rem;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin-block-end: 1em;
    margin-block-start: 1em;
    margin-bottom: 1rem;
    margin-inline-end: 0px;
    margin-inline-start: 0px;
    padding-inline-start: 40px;
    padding: .75rem 1rem;

    li:nth-child(1){
        padding-left: 0rem;

        &::before{
            padding-right: 0rem;
            content: '';
        }
    }
}`;

export { StyledBreadcrumb };
