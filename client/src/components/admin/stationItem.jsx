import React from 'react'

import { useStations } from '../../hooks/useStations';


export default function StationItem ({station}) {

    const {  disableStation } = useStations() 



    const disable = () => {

       disableStation(station.id,'OFF') 

    };

    const enable = () => {

        disableStation(station.id,'ON') 
 
     };
  
       return(
        

        <tr>
              
            <td width="390"> {station.name}</td>
            <td width="390"> {station.location}</td>
            <td width="390"> {station.state_station}</td>
            <td width="390"> {station.slots.length}</td>
      

            {
                station.state_station === 'ON' 
                
                ?     
                
                <td><button className='btn btn-danger' onClick={disable}>DESHABILITAR ESTACIÓN</button></td>
                
                :

                <td><button className='btn btn-success' onClick={enable}>HABILITAR ESTACIÓN</button></td>
            }
      
        
        </tr>     
    
     
      ) 
  }
