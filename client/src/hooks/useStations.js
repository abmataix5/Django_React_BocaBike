import {useContext, useEffect, useState} from 'react'
import getStations from '../services/getStations'
import StationsContext from '../context/StationsContext'



export function useStations () {
  
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)

  const {stations, setStations} = useContext(StationsContext)


  useEffect(function () {
    setLoading(true)

    getStations()
      .then(stations => {
        console.log(stations);
        setStations(stations)
        setLoading(false)
        
      })
  }, [setStations])


  return { stations,loading,loadingNextPage}
}