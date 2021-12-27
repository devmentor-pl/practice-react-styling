import styled, { css } from 'styled-components';

const DefaultStyledTab  = styled.li`
    --color-alfa: ${props=>props.theme.colorLine};
    --color-beta: ${props=>props.theme.colorFont};
    border: 1px solid transparent;
    border-bottom-color: var(--color-alfa);
    border-top-left-radius: 0.2rem;
    border-top-right-radius: 0.2rem;
    color: var(--color-beta);
    &:last-child {
        flex-grow: 2;
    }

    & a, p {
        display:inline-block;
        margin: 0;
        padding: 0.5rem 1rem;
        color: ${props=> 
            (props.active) && css`black`
        }
    }
    
    & a:hover {
        text-decoration:none;
    }

    &:hover {
        ${props=> 
            (!props.active & props.active) && css`
            border-color: var(--color-alfa)`
        }
    }
   
    ${props=>
        props.active && css`
        border-color: var(--color-alfa);
        border-bottom-color: white;
        `
    }
`

const StyledTab = styled(DefaultStyledTab)(props=> props.style); 

export { StyledTab}