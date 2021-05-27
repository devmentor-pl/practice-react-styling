import React from 'react';
import StyledBreadcrumb from './Breadcrumb.styled';
import BreadcrumbItem from './BreadcrumbItem'




const Breadcrumb = props => {

    return (
        
        <StyledBreadcrumb>
            <BreadcrumbItem href="https://www.wp.pl" >Home </BreadcrumbItem>
            <BreadcrumbItem href="https://www.o2.pl" >About us </BreadcrumbItem>
            <BreadcrumbItem href="#" active>Portfolio </BreadcrumbItem>
        </StyledBreadcrumb>
       
    )
}

export default Breadcrumb 