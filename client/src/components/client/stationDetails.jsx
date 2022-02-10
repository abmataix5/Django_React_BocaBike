import React from 'react'
import { useRents } from '../../hooks/useRent';


export default function StationInfoDetails ({ slot}) {

  const { rent,rentBikeID,rent_remove } = useRents(); 

  const rentBike = () => {

    if(localStorage.getItem('bike_rentID')){
        window.alert('Ya tiene un alquiler activo!')
    }else{
      rent(slot.id_bike,slot.station,slot.id);
    }

  };


  const returnBike = () => {

    if(localStorage.getItem('bike_rentID')){
      rent_remove(slot.id)
    }else{
      window.alert('No tiene un alquiler activo!')
    }

  };



  
  return (

slot.slot_state === 'LIBRE' ?

    <tr>
       
        <td>SLOT {slot.slot_state}</td>
        <td><button className='btn btn-warning' onClick={returnBike}>DEJAR BICI</button></td>
    </tr>

    :


    <tr>
        <td width="390">Bici número {slot.id_bike}</td>
    
        <td><button className='btn btn-success' onClick={rentBike}>ALQUILAR BICI</button></td>
    </tr>
    
  )
}

