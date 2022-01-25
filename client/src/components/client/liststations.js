import React from 'react'
import Station from './station'

export default function ListStations ({stations}) {



       return(
        


        (stations.length === 0) ? "Cargando datos..." :    


        <div>

          <section class="py-5 text-center container">
            <div class="row py-lg-5">
              <div class="col-lg-6 col-md-8 mx-auto">
                <h1 class="fw-light">Todas nuestras estaciones</h1>
          
                <p>
                  <a to="" class="btn btn-primary my-2">Mas Información</a>
                
                </p>
              </div>
            </div>
          </section>

          <div class="album py-5 bg-light">
            <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                  {stations.map((station,index) =>
                
                    <Station key={index}  station={station} />
              
                  )}
               
            </div>
            </div>
          </div>

       </div>
     
      ) 
  }
