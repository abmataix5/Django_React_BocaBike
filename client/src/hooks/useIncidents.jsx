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
        console.log(incidents)
        setIncidents(incidents.data.incidents)
        setLoading(false)
        
      })
  }, [setIncidents])



  return { incidents,loading,setIncidents}
}
