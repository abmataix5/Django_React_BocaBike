import React from 'react'

import Loading from 'react-simple-loading';
import { useUser } from '../../hooks/useUser';

export default function StationItem ({station}) {

console.log(station);
  
       return(
        

        <tr>
              
            <td width="390"> {station.name}</td>
            <td width="390"> {station.location}</td>
            <td width="390"> {station.state}</td>
            <td><button className='btn btn-success'>EDITAR ESTACIÓN</button></td>
            <td><button className='btn btn-danger'>DESHABILITAR ESTACIÓN</button></td>
        </tr>     
    
     
      ) 
  }
