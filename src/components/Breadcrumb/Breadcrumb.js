import React from 'react';
import { StyledBreadcrumb } from './Breadcrumb.styled';
import {BreadcrumbItem} from './BreadcrumbItem';
import { BreadcrumbList } from './BreadcrumbList';


const Breadcrumb = () => {

    return (
        <StyledBreadcrumb>{BreadcrumbList.map((item) => <BreadcrumbItem data={item}/>)}</StyledBreadcrumb>
    );
}

export default Breadcrumb;
