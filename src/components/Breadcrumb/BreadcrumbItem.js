import React from 'react';

import { ThemeProvider } from 'styled-components';

import { StyledBreadcrumbItem } from './BreadcrumbItem.styled';

const BreadcrumbItem = props => {
    const { href, children:text, active } = props

    const content = href ? <a href={href}>{text}</a> : text

    return (
        <ThemeProvider theme={ {active} }>
            <StyledBreadcrumbItem>{content}</StyledBreadcrumbItem>
        </ThemeProvider>
    );
}

export default BreadcrumbItem;