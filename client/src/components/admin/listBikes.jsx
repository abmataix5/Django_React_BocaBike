import React from 'react'
import Loading from 'react-simple-loading';
import BikeItem from './bikeItem';


export default function ListBikesAdmin ({bikes}) {

console.log(bikes);
  
       return(
        

        (bikes.length === 0) ?<Loading/> :

        <table className="table table-striped table-product">
        <tbody>

        <tr>
            <td width="390">Estacion</td>
            <td width="390">ID Bici</td>
            <td width="390">Info Bici</td>
            <td width="390"></td>
            <td width="390"></td>
        
        </tr>    

       
        {bikes.map((bike,index) =>
                
            <BikeItem key={index}  bike={bike} />
          
        )}
  
      
                        
                                        
        </tbody>
    </table>
    
     
      ) 
  }
