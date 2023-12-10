import styled, { css } from 'styled-components'

const Menu = styled.nav`
  border-bottom: 1px solid #dee2e6;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
`

const TabContent = styled.div``

const ContentContainer = styled.div`
  ${({ isDisplayed }) =>
    !isDisplayed &&
    css`
      display: none;
    `}
`

export { Menu, TabContent, ContentContainer }
