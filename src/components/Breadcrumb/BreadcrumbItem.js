import React from 'react'
import { StyledBreadcrumbItem, BreadcrumbItemLink } from './BreadcrumbItem.styled'

const BreadcrumbItem = ({ href, active, children }) => {
  return (
    <StyledBreadcrumbItem>
      <BreadcrumbItemLink
        href={href}
        active={active}
      >
        {children}
      </BreadcrumbItemLink>
    </StyledBreadcrumbItem>
  )
}

export default BreadcrumbItem
