import React from 'react';
import StyledBreadcrumbMenu from './BreadcrumbMenu.styled';
import { ThemeProvider } from 'styled-components';
import themeSettings from './../styled/theme';

const Breadcrumb = ({ children }) => (
    <nav>
        <ThemeProvider theme={ themeSettings}>
            <StyledBreadcrumbMenu>{ children }</StyledBreadcrumbMenu>
        </ThemeProvider>
    </nav>
)

export default Breadcrumb;