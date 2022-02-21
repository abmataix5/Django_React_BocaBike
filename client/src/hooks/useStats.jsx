import { useEffect, useState} from 'react'

import StatsService from '../services/getStats'



export function useStats () {
  
  const [statsRentStation,setRentStationStats] = useState([])


  useEffect(function () {
    StatsService.getStatsRentsStations()
      .then((data) => {

       console.log(data.data)
       setRentStationStats(data.data)
     
      })
      .catch((err) => {
        console.log(err)
      });
  }, [setRentStationStats])





  return { statsRentStation,setRentStationStats}
}