import {useContext, useEffect, useState,useCallback} from 'react'
import StationsService from '../services/getStations'
import IncidentsContext from '../context/IncidentsContext'



export function useIncidents () {
  
  const [loading, setLoading] = useState(false)


  const {incidents, setIncidents} = useContext(IncidentsContext)


  useEffect(function () {
    setLoading(true)

    StationsService.getAllIncidents()
      .then(incidents => {
     
        setIncidents(incidents.data.incidents)
        setLoading(false)
        
      })
  }, [setIncidents])


  const createIncident = useCallback(
    (text, id_station) => {
console.log(text)
console.log(id_station)
      StationsService.createIncident({"station": id_station,"text":text})
        .then((data) => {
 
            console.log(data)
            
            window.location.reload()
          
        })
        .catch((err) => {
    
        });
    },
    []
  );



  return { incidents,loading,setIncidents,createIncident}
}
