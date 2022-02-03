import {useState, useEffect} from 'react'
import { useStations } from "../hooks/useStations";
import getSingleStation from '../services/getSingleStation'

export  function useSingleStation ({ name }) {
  
  
  const {stations} = useStations()
  const gifFromCache = stations.find(singleGif => singleGif.name === name)

  const [station, setStation] = useState(gifFromCache)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(function () {
    if (!station) {
      setIsLoading(true)
      getSingleStation({ name })
        .then(station => {

          setStation(station.results[0])
          setIsLoading(false)
          setIsError(false)
        }).catch(err => {
          setIsLoading(true)
          setIsError(true)
        })
    }
  }, [station, name])

  return {station, isLoading, isError}
}