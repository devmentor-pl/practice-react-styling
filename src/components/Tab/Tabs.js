import React, { useState, createContext } from 'react';
import { StyledDiv, StyledNav, StyledParagraph } from './Tab.styled';

export const MyContext = createContext();

const Tabs = props => {
	const [key, setKey] = useState(props.defaultActiveKey);

  //szukam robie tablice z jednym elementem takim samym atrybutem jak kliniety link w nawigacji
	const Tab = props.children.find(element => element.props.eventKey === key);
  // pozniej wchodze w tego taba i uzywam  childern  zeby wejsc do paragrafu, pozniej znowu przez childern do zawrtosci paragrafu
	const Paragraph = Tab.props.children.props.children;

	return (
		<>
			<MyContext.Provider value={{ key: key, change: setKey }}>
				<StyledNav id='tab' activeKey={key}>
					{props.children}
				</StyledNav>
				<StyledDiv>
					<StyledParagraph>{Paragraph}</StyledParagraph>
				</StyledDiv>
			</MyContext.Provider>
		</>
	);
};

export default Tabs;
