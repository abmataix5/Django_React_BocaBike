import React from 'react'
import Loading from 'react-simple-loading';


export default function ListStats ({stat}) {


  
       return(
        

         (stat.length === 0)
         
         ?
         
         <Loading/> 
         
         : 

            <tr>
              <td>{stat.id}</td>
              <td>{stat.name_stat}</td>
              <td>{stat.rents}</td>
            </tr>
    
     
      ) 
  }
