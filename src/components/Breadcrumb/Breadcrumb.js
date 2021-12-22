import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ThemeProvider } from 'styled-components';
import themeSettings from './theme'

const breadcrumbsList = [
    {name: 'Home', href: '#'},
    {name: 'Library', href: 'https://getbootstrap.com/docs/4.0/components/breadcrumb/'},
    {name: 'Data', active: true}
]

const Breadcrumb = props => {
    return (
        <ThemeProvider theme = {themeSettings}> {
            <nav> <ul>{breadcrumbsList.map(({name, href, active}) => <li >{name}</li>)}</ul> </nav>
        }
        </ThemeProvider>
    )
}

export default Breadcrumb;