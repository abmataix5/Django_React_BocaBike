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
            <th width="390">Nombre estación</th>
            <th width="390">Localización</th>
            <th width="390">Estado de la estación</th>
            <th width="390">Número de slots</th>
            <th width="390"></th>
        
        </tr>    

       
        {stations.map((station,index) =>
                
            <StationItem key={index}  station={station} />
          
        )}
  
      
                        
                                        
        </tbody>
    </table>
    
     
      ) 
  }
