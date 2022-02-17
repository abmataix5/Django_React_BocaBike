import React, {useState,useEffect} from 'react'
import StationsService from '../services/getStations'
const Context = React.createContext({})

export function IncidentsContextProvider ({children}) {
  
  const [incidents, setIncidents] = useState([])
  const [notifications, setNotifications] = useState([])


 useEffect(function () {
    

    StationsService.getNotifications()
      .then(notification => {
     console.log(notification.data)
        setNotifications(notification.data)
        
      })
  }, [setNotifications])


  return <Context.Provider value={{incidents, setIncidents,notifications,setNotifications}}>
    {children}
  </Context.Provider>
}

export default Context