import {useContext, useEffect, useState} from 'react'
import getBikes from '../services/getBikes'
import BikesContext from '../context/BikesContext'



export function useBikes () {
  
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)

  const {bikes, setBikes} = useContext(BikesContext)


  useEffect(function () {
    setLoading(true)

    getBikes()
      .then(bikes => {
        setBikes(bikes)
        setLoading(false)
        
      })
  }, [setBikes])

  return { bikes,loading,loadingNextPage}
}