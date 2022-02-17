import React from 'react'
import Station from './station'
import Loading from 'react-simple-loading';
import { useUser } from '../../hooks/useUser';

export default function ListNotification ({notification}) {

console.log(notification)
       return(
    
        <div>
               <p>Fecha del mensaje : {notification.created_at}</p>
               
               <p>Admin : {notification.text}</p>
               
               <hr/>
       </div>
     
      ) 
  }
