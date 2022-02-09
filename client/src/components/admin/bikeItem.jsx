import React from 'react'

import Loading from 'react-simple-loading';
import { useUser } from '../../hooks/useUser';

export default function BikeItem ({bike}) {

console.log(bike);
  
       return(
        

        <tr>
              
            <td width="390">Estación {bike.station}</td>
            <td width="390">ID Bici :  {bike.id}</td>
            <td width="390"> {bike.state}</td>
            <td><button className='btn btn-success'>EDITAR BICI</button></td>
            <td><button className='btn btn-danger'>BORRAR BICI</button></td>
        </tr>     
    
     
      ) 
  }
