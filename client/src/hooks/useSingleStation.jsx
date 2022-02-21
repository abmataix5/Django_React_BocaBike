import {useState, useEffect,useCallback, useContext} from 'react'
import { useStations } from "../hooks/useStations";
import StationsService from '../services/getStations'
import  RentContext  from '../context/RentsContext';

export  function useSingleStation ({ name }) {
  
  const {rentActive} = useContext(RentContext)
  const {stations} = useStations()
  const stationFromCache = stations.find(singleStation => singleStation.name === name)

  const [station, setStation] = useState(stationFromCache)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(function () {

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
    

  }, [rentActive])



  return {station, isLoading, isError}
}