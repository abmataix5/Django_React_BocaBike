import React from 'react'
import Station from './station'
import Loading from 'react-simple-loading';
import { useUser } from '../../hooks/useUser';
import { useIncidents } from '../../hooks/useIncidents';


export default function ListNotification ({notification}) {

       const {notificationUpdatestate} =  useIncidents();
       
       console.log(notification.id)

     const handleSubmit = (e) => {
  
       notificationUpdatestate(notification.id)
    
     };
       return(
    
        <div>
               <p>Fecha del mensaje : {notification.created_at}</p>
               
               <p>Admin : {notification.text}</p>
               <button  className="btn btn-success px-3 me-2" onClick={handleSubmit}>Leída</button>
               
               <hr/>
       </div>
     
      ) 
  }
