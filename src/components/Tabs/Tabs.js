import React,{useState, createContext} from "react";
import { StyledDiv, StyledNav, StyledParagraph } from "./Tabs.styled";

export const MyContext = createContext()

const Tabs = props => {
    const [key, setKey] = useState(props.defaultActiveKey);
    const Tab = props.children.find(element  => element.props.eventKey === key);
    const Paragraph = Tab.props.children.props.children;

    return(
        <>
            <MyContext.Provider value={{key: key, change: setKey}}>
                <StyledNav id="tab" activeKey={key}>{props.children}</StyledNav>
                <StyledDiv>
                    <StyledParagraph>{Paragraph}</StyledParagraph>
                </StyledDiv>
            </MyContext.Provider>
        </>
    )
}

export default Tabs