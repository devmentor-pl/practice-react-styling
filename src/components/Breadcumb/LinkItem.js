import React from 'react';

function LinkItem({ href, title }) {
    return <a href={href}>{title}</a>;
}

export default LinkItem;
