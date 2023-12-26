import styled from 'styled-components';

const DefaultStyledAlert = styled.div`
    position: relative;
    padding: 6px 12px;
    margin-bottom: 10px;
    border: 1px solid transparent;
    border-radius: 8px;
`
export const StyledAlert = styled(DefaultStyledAlert)(
    ({ theme, variant }) => theme.alert[variant]
  );

export { StyledAlert };