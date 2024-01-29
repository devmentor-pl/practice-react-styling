import styled from 'styled-components'
import image from './../../../images/image.jpg'

const StyledImage = styled.img.attrs(() => ({
	src: image,
}))`
	border-style: none;
	flex-shrink: 0;
	vertical-align: middle;
	width: 100%;
`

export default StyledImage
