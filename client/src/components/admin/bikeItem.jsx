import React from 'react'
import { useBikes } from '../../hooks/useBikes';


export default function BikeItem ({bike}) {

    const { deleteBike } = useBikes(); 

    const deleteBikeFunc = (e) => { 
 
        e.preventDefault();
    
        deleteBike(bike.id)
    
       }; 
  
       return(
        

        <tr>
              
            <td width="390">Estación {bike.station}</td>
            <td width="390">ID Bici :  {bike.id}</td>
            <td width="390"> {bike.state}</td>
            <td><button className='btn btn-success'>EDITAR BICI</button></td>
            <td><button className='btn btn-danger' onClick={deleteBikeFunc}>BORRAR BICI</button></td>
        </tr>     
    
     
      ) 
  }
