import React from 'react'
import { useRents } from '../../hooks/useRent';

export default function StationInfoDetails ({ slot}) {

  const { rent,rentBikeID } = useRents(); 
  console.log(rentBikeID)
   
  const rentBike = () => {

    if(localStorage.getItem('bike_rentID')){
        window.alert('Ya tiene un alquiler activo!')
    }else{
      rent(slot.id_bike,slot.station);
    }

  };


  const rentBikeDelete = () => {

    if(localStorage.getItem('bike_rentID')){
      localStorage.removeItem('bike_rentID')
      window.alert('Alquiler finalizado!')
    }else{
      window.alert('No tiene un alquiler activo!')
    }

  };


  const returnBike = () => {

    console.log(slot.id_bike)
    console.log(slot.station)
  };

  
  return (

slot.slot_state === 'LIBRE' ?

    <tr>
       
        <td>SLOT {slot.slot_state}</td>
        <td><button className='btn btn-warning' onClick={rentBikeDelete}>DEJAR BICI</button></td>
    </tr>

    :


    <tr>
        <td width="390">Bici número {slot.id_bike}</td>
    
        <td><button className='btn btn-success' onClick={rentBike}>ALQUILAR BICI</button></td>
    </tr>
    
  )
}

