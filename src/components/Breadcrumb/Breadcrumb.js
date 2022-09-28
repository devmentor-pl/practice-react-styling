import React from 'react'
import { StyledBreadcrumb, BreadcrumbPanel } from './Breadcrumb.styled'

const Breadcrumb = props => {
  return (
    <StyledBreadcrumb>
      <BreadcrumbPanel>
        {props.children}
      </BreadcrumbPanel>
    </StyledBreadcrumb>
  )
}

export default Breadcrumb
