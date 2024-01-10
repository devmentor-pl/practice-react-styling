import styled from "styled-components";

const TabsContainer = styled.div`
    padding-left: 0;
`;

const TabList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    border-bottom: 1px solid #dee2e6;
`;

const TabButton = styled.button`
    padding: 0.5rem 1rem;
    border: 1px solid transparent;
    border-bottom: none;
    cursor: pointer;
    background-color: transparent;
    margin-bottom: -1px;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    
    &:focus {
        outline: none;
    }

    &.active {
        color: #495057;
        background-color: #fff;
        border-color: #dee2e6 #dee2e6 #fff;
    }

    &:not(.active):hover {
        border0color: transparent;
        color: #0056b3;
    }
`;

const TabContent = styled.div`
    padding: 0;
    border-top: none;
`;

export { TabsContainer, TabList, TabButton, TabContent };