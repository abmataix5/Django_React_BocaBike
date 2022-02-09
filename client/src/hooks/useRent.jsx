import UserContext from "../context/UserContext"
import {useContext, useCallback, useState} from 'react'
import getBikes from '../services/getBikes'

import StationsService from "../services/getStations";


export function useRents () {
  
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [rentBikeID, setRentBikeID] = useState(false)
 


 
  const rent = useCallback(
    ( bike,station,user) => {
    console.log(bike,station)
    user = localStorage.getItem('id_user_active')
    StationsService.rentBike({ user,bike, station  })
        .then((data) => {
 
              console.log(data.data.bike)
             localStorage.setItem('bike_rentID',data.data.bike)
          
        })
        .catch((err) => {
       console.log(err)
        });
    },
    []
  ); 


  const rent_remove = useCallback(
    ( bike,station,user) => {
    console.log(bike,station)
    user = localStorage.getItem('id_user_active')
    StationsService.rentBike({ user,bike, station  })
        .then((data) => {
 
              console.log(data.data.bike)
             localStorage.setItem('bike_rentID',data.data.bike)
          
        })
        .catch((err) => {
       console.log(err)
        });
    },
    []
  ); 


  return { rent,loading,loadingNextPage,rentBikeID}
}