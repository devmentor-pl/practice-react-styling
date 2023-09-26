import styled from "styled-components";

const DefaultStyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: 0.25rem;
`

const StyledCard = styled(DefaultStyledCard)(
  props => props.style
)

export { StyledCard }