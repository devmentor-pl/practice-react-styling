import React from 'react';
import styled from 'styled-components';

const Bread = styled.div`
    background-color: #e9ecef;
    padding: 0.75rem 1rem;
`
const Link = styled.div`
    color: red;
    display: inline-block;
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
    color: ${props => props.data && 'gray'}
`
const BreakBread = styled.div`
    color: gray;
    display: inline-block;
    padding-left: 10px;
    padding-right: 10px;
`
const Breadscrumb = () => {
    return (
        <div>
            <Bread>
                <Link as='a' href='/#' target="_blank">Home</Link>
                <BreakBread>/</BreakBread>
                <Link as='a' href='https://styled-components.com/docs/basics#getting-started' target="_blank">Library</Link>
                <BreakBread>/</BreakBread>
                <Link data>Data</Link>
            </Bread>
        </div>
    );
}

export default Breadscrumb;