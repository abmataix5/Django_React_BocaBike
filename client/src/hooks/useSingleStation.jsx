import {useState, useEffect} from 'react'
import { useStations } from "../hooks/useStations";
import StationsService from '../services/getStations'
import { useRents } from './useRent';
export  function useSingleStation ({ name }) {
  
  const{rentActive} = useRents()
  const {stations} = useStations()
  const gifFromCache = stations.find(singleGif => singleGif.name === name)

  const [station, setStation] = useState(gifFromCache)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(function () {
    if (!station) {
      setIsLoading(true)
      StationsService.getOneStation({ name })
        .then(station => {

          setStation(station.data.results[0])
          setIsLoading(false)
          setIsError(false)
        }).catch(err => {
          setIsLoading(true)
          setIsError(true)
        })
    }
  }, [station, name,rentActive])

  return {station, isLoading, isError}
}