import {useContext, useEffect, useState,useCallback} from 'react'
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



  const disableStation = useCallback(
    (id_station, state_station) => {

      StationsService.disableStation({station:{"state_station": state_station}},id_station)
        .then((data) => {
 
            console.log(data)
            window.location.reload()
          
        })
        .catch((err) => {
    
        });
    },
    []
  );

  return { stations,loading,disableStation}
}
