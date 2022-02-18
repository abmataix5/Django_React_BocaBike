import React, {useState,useEffect} from 'react'
import StationsService from '../services/getStations'
const Context = React.createContext({})

export function IncidentsContextProvider ({children}) {
  
  const [incidents, setIncidents] = useState([])
  const [notifications, setNotifications] = useState([])
  const [checked,setChecked] = useState(false)

 useEffect(function () {
    
    setChecked(false) /* Para actualizar notificiones leidas sin recargar página */

    StationsService.getNotifications()
      .then(notification => {
     console.log(notification.data)
        setNotifications(notification.data)
        
      })
  }, [setNotifications,checked])


  return <Context.Provider value={{incidents, setIncidents,notifications,setNotifications,checked,setChecked}}>
    {children}
  </Context.Provider>
}

export default Context