import styled from 'styled-components';

const DefaultStyledButton = styled.button`
    display: block;
    cursor: pointer;
    border: 1px solid transparent;
    line-height: 1.5;
    border-radius: ${props => (props.size === 'lg' ? '0.3rem' : '0.3rem')};
    padding: ${props => (props.size === 'lg' ? '0.5rem 1rem' : '0.25rem 0.5rem')};
    font-size: ${props => (props.size === 'lg' ? '1.25rem' : '0.875rem')};
    transition: 'all 0.2s ease-in-out';
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
`;

const StyledButton = styled(DefaultStyledButton)`
    color: ${props => props.theme[props.variant].color};
    background-color: ${props => props.theme[props.variant].backgroundColor};
    border-color: ${props => props.theme[props.variant].borderColor};
    &:hover {
      color: ${props => props.theme[props.variant].colorHover};
      background-color: ${props => props.theme[props.variant].backgroundColorHover};
      border-color: ${props => props.theme[props.variant].borderColorHover};
    }
    &:active {
      color: ${props => props.theme[props.variant].colorActive};
      background-color: ${props => props.theme[props.variant].backgroundColorActive};
      border-color: ${props => props.theme[props.variant].borderColorActive};
    }
`;

export default StyledButton;
