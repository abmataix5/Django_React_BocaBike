import {useContext, useEffect, useState} from 'react'
import StationsService from '../services/getStations'
import StationsContext from '../context/StationsContext'



export function useStations () {
  
  const [loading, setLoading] = useState(false)


  const {stations, setStations} = useContext(StationsContext)


  useEffect(function () {
    setLoading(true)

    StationsService.getAllStations()
      .then(stations => {

        setStations(stations.data.stations)
        setLoading(false)
        
      })
  }, [setStations])


  return { stations,loading}
}
