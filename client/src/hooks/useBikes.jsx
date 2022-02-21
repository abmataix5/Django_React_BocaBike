import {useContext, useEffect, useState,useCallback} from 'react'
import BikesContext from '../context/BikesContext'
import BikesService from '../services/getBikes'



export function useBikes () {
  
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const {bikes, setBikes} = useContext(BikesContext)


  useEffect(function () {
    setLoading(true)

    BikesService.getAllBikes()
      .then(bikes => {
   
        setBikes(bikes.data.bikes)
        setLoading(false)
        
      })
  }, [setBikes])


  const deleteBike = useCallback((id_station) => {

  
    BikesService.deleteBike(id_station)
      .then((data) => {

          console.log(data)
          window.location.reload()
        
      })
      .catch((err) => {
  
      });
      
  },
  []
);

  return { bikes,loading,loadingNextPage,deleteBike}
}