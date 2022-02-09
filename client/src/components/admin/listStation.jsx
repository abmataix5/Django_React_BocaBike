import React from 'react'

import Loading from 'react-simple-loading';
import { useUser } from '../../hooks/useUser';
import StationItem from './stationItem';
export default function ListStationsAdmin ({stations}) {

console.log(stations);
  
       return(
        

        (stations.length === 0) ?<Loading/> :

        <table className="table table-striped table-product">
        <tbody>

        <tr>
            <td width="390">Nombre estación</td>
            <td width="390">Localización</td>
            <td width="390">Estado de la estación</td>
            <td width="390"></td>
            <td width="390"></td>
        
        </tr>    

       
        {stations.map((station,index) =>
                
            <StationItem key={index}  station={station} />
          
        )}
  
      
                        
                                        
        </tbody>
    </table>
    
     
      ) 
  }
