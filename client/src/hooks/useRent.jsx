import UserContext from "../context/UserContext"
import {useContext, useCallback, useState} from 'react'
import getBikes from '../services/getBikes'

import StationsService from "../services/getStations";


export function useRents () {
  
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [rentBikeID, setRentBikeID] = useState(false)
 


 
  const rent = useCallback(( bike,station,id_slot) => {
   

      /* Insert en tabla alquileres de bicis, para posteriores estadísticas */

        StationsService.rentBike({bike, station  })
            .then((data) => {

                localStorage.setItem('bike_rentID',data.data.bike.id) /* Guardamos bici alquilada activa */
              
            })
            .catch((err) => {
          console.log(err)
            });


      /* Update de slot */

        StationsService.updateSlotRent({slot:{"slot_state": "LIBRE","id_bike": ""}} ,id_slot)
        .then((data) => {

          console.log(data)
        })
        .catch((err) => {
      console.log(err)
        });
        
    },
    []
  ); 


  const rent_remove = useCallback(( id_slot ) => {
    
      const bike = localStorage.getItem('bike_rentID')
  
        StationsService.updateSlotRent({slot:{"slot_state": "OCUPADO","id_bike": bike}} ,id_slot)
        .then((data) => {
          localStorage.removeItem('bike_rentID')
          window.alert('Alquiler finalizado!')
          console.log(data)
        })
        .catch((err) => {
      console.log(err)
        });
    },
    []
  ); 


  return { rent,rent_remove,loading,loadingNextPage,rentBikeID}
}