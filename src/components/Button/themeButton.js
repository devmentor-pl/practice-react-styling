import {css} from 'styled-components';

export default {
    primary: css`
        color: white;
        background-color: #007bff; 
        border-color: #007bff;
        
        &:hover {
            color: #fff;
            background-color: #0069d9;
            border-color: #0062cc;
        }
    
    `,
    lg: css`
        padding: .5rem 1rem;
        font-size: 1.25rem;
        line-height: 1.5rem;
        border-radius: .3rem
    `,
 
} 