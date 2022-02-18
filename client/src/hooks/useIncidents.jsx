import {useContext, useEffect, useState,useCallback} from 'react'
import StationsService from '../services/getStations'
import IncidentsContext from '../context/IncidentsContext'



export function useIncidents () {
  


  const {incidents, setIncidents,checked,setChecked} = useContext(IncidentsContext)


  useEffect(function () {
   

    StationsService.getAllIncidents()
      .then(incidents => {
     
        setIncidents(incidents.data.incidents)
      
        
      })
  }, [setIncidents])


  const createIncident = useCallback(
    (text, id_station) => {

      StationsService.createIncident({"station": id_station,"text":text})
        .then((data) => {
 
            console.log(data)
          
        })
        .catch((err) => {
            console.log(err)
        });
    },
    []
  );




  /* Respuesta del administrador a la incidencia de un usuario */


  const adminResponse = useCallback((incident_id, textNotification) => {


      StationsService.createNotification({"incident": incident_id,"text":textNotification})
        .then((data) => {
 
            console.log(data)
            
     /*        window.location.reload() */
          
        })
        .catch((err) => {
    
        });
    },
    []
  );



  const notificationUpdatestate = useCallback((notification_id) => {
    
       StationsService.updateNotificationState({notification:{"state": "Leída"}},notification_id)
        .then((data) => {
 
          setChecked(true)/* Para actualizar notificiones leidas sin recargar página */
                  
        })
        .catch((err) => {
          console.log(err)
        }); 
    },
    []
  );




  return { incidents,setIncidents,createIncident,adminResponse,notificationUpdatestate}
}
