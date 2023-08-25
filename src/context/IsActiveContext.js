import React from "react";

const err = () => {
  console.error('You forgot pass provider')
}

const init = {
  isActive: false,
  handleSetIsActive: err
}

export const IsActiveContext = React.createContext(init)

export const IsActiveContextProvider = (props) => {
  const { children } = props

  const [isActive, setIsActive] = React.useState(init)

  const handleSetIsActive = (number) => {
    setIsActive(number)
  }

  return (
    <IsActiveContext.Provider
      value={{
        isActive,
        handleSetIsActive
      }}
    >
      {children}
    </IsActiveContext.Provider>
  )
}

export default IsActiveContextProvider