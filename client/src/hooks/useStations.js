import {useContext, useEffect, useState} from 'react'
import getStations from '../services/getStations'
import StationsContext from '../context/StationsContext'



export function useStations () {
  
  const [loading, setLoading] = useState(false)


  const {stations, setStations} = useContext(StationsContext)


  useEffect(function () {
    setLoading(true)

    getStations()
      .then(stations => {
        
        setStations(stations.stations)
        setLoading(false)
        
      })
  }, [setStations])


  return { stations,loading}
}
