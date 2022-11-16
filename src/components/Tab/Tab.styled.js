import styled, { css } from 'styled-components';

const DefaultStyledTab  = styled.li`
    --color-primary: ${props=>props.theme.colorLine};
    --color-secondary: ${props=>props.theme.colorFont};
    border: 1px solid transparent;
    border-bottom-color: var(--color-primary);
    border-top-left-radius: 0.2rem;
    border-top-right-radius: 0.2rem;
    color: var(--color-secondary);
    &:last-child {
        flex-grow: 2;
    }
    & a, p {
        display:inline-block;
        margin: 0;
        padding: 0.5rem 1rem;
        color: ${props=> 
            (props.marked) && css`black`
        }
    }
    
    & a:hover {
        text-decoration:none;
    }
    &:hover {
        ${props=> 
            (!props.marked & props.active) && css`
            border-color: var(--color-primary)`
        }
    }
   
    ${props=> 
        props.marked && css`
        border-color: var(--color-primary);
        border-bottom-color: white;
        `
    }
`

const StyledTab = styled(DefaultStyledTab)(props=> props.style); 

export { StyledTab }