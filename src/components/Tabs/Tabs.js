import React from "react";

import { StyledTabs, Text } from "./Tabs.styled";
import { IsActiveContext } from "../../context/IsActiveContext";

const Tabs = (props) => {
  const { children } = props

  const {
    isActive,
    handleSetIsActive
  } = React.useContext(IsActiveContext)

  React.useEffect(() => {
    props.children.map((child, index) => {
      if (child.props.eventKey === props.defaultActiveKey) {
        handleSetIsActive(index)
      }
    })
  }, [])

  return (
    <>
      <StyledTabs>
        {
          React.Children.map(children, (child, index) => {
            return React.cloneElement(child, {
              index: index,
            })
          })
        }
      </StyledTabs>
      {
        props.children.map((child, index) => {
          return (
            <Text display={isActive === index ? 'block' : 'none'} key={index}>{child.props.children}</Text>
          )
        })
      }
    </>
  )
}

export default Tabs