import { useEffect, useState} from 'react'

import StatsService from '../services/getStats'



export function useStats () {
  
  const [statsRentStation,setRentStationStats] = useState([])
  const [statsRentBike,setRentBikeStats] = useState([])
  const [statsRentUser,setRentUserStats] = useState([])

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



  useEffect(function () {
    StatsService.getStatsRentsBikes()
      .then((data) => {

       console.log(data.data)
       setRentBikeStats(data.data)
     
      })
      .catch((err) => {
        console.log(err)
      });
  }, [setRentBikeStats])


  useEffect(function () {
    StatsService.getStatsRentsUsers()
      .then((data) => {

       console.log(data.data)
       setRentUserStats(data.data)
     
      })
      .catch((err) => {
        console.log(err)
      });
  }, [setRentBikeStats])





  return { 
    statsRentStation,
    setRentStationStats,
    setRentBikeStats,
    statsRentBike,
    setRentUserStats,
    statsRentUser
  }
}