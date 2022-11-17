import styled from "styled-components"

const BreadcrumbItem = styled.a`

display: inline;
margin-right: 5px;
::after{
    content: "  /";
}
:last-child::after{
    content: " "
}


`

export default BreadcrumbItem