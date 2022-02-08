import React from 'react'


export default function StationInfoDetails ({ slot}) {
   
  const handleClick = () => {

    console.log(slot.id_bike)
    console.log(slot.station)
  };

  return (

slot.slot_state === 'LIBRE' ?

    <tr>
       
        <td>SLOT {slot.slot_state}</td>
        <td><button className='btn btn-warning' onClick={handleClick}>DEJAR BICI</button></td>
    </tr>

    :


    <tr>
        <td width="390">Bici número {slot.id_bike}</td>
    
        <td><button className='btn btn-success' onClick={handleClick}>ALQUILAR BICI</button></td>
    </tr>
    
  )
}

