import React, {useState} from 'react'

const Context = React.createContext({})

export function IncidentsContextProvider ({children}) {
  const [incidents, setIncidents] = useState([])

  return <Context.Provider value={{incidents, setIncidents}}>
    {children}
  </Context.Provider>
}

export default Context