import React, {useState} from 'react'

const Context = React.createContext({})

export function RentsContextProvider ({children}) {
  const [rentActive, setRentActive] = useState([])

  return <Context.Provider value={{rentActive, setRentActive}}>
    {children}
  </Context.Provider>
}

export default Context