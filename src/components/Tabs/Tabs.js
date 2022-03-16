import React, { useState } from 'react';
import StyledTabs from './Tabs.styled';

export default function Tabs(props) {
	const [content, setContent] = useState('');

	console.log(content);

	const clickHandler = (e) => {
		setContent(e.target.dataset.content);
	};

	return (
		<>
			<StyledTabs onClick={clickHandler}>{props.children}</StyledTabs>
			<p>{content}</p>
		</>
	);
}
