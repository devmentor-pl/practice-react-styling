import React from 'react'
import { StyledBreadcrumb,Breadcrumb } from './Breadcrumb.styled'

const Breadcrumb = (props) => {
    const {children} = props
  return (
    <StyledBreadcrumb>
        {children}
    </StyledBreadcrumb>
  )
}

export default Breadcrumb