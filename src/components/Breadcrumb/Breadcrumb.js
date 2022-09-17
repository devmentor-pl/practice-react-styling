import React from "react";
import * as Styled from './Breadcrumb.styled';

const Breadcrumb = ({ children }) => {
    return (
        <Styled.Breadcrumb>{children}</Styled.Breadcrumb>
    )
};

export default Breadcrumb;