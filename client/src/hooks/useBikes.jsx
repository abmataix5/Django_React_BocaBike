import {useContext, useEffect, useState} from 'react'
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

  return { bikes,loading,loadingNextPage}
}