import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: relative;

  p {
    position: absolute;
  }

  .active {
    opacity: 1;
    transition: 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .disabled {
    opacity: 0;
  }
`;
