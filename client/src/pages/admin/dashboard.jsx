import React from "react";
import NavDashboard from "../../components/admin/navDashboard"
import ListStats from "../../components/admin/listStats"
import { useStats } from "../../hooks/useStats";


export default function Dashboard() {

  const {statsRentStation} = useStats();
  console.log(statsRentStation)

    return (

  
<div className="container-fluid mt">
  <div className="row">

<NavDashboard></NavDashboard>
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
   

   

      <h2>Estaciones con más alquileres</h2>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th className="col">#</th>
              <th className="col">Nombre de la estación</th>
              <th className="col">Número de reservas totales</th>
            </tr>
          </thead>
          <tbody>

              
        {statsRentStation.map((stat,index) =>
                
                <ListStats key={index}  stat={stat} />
              
            )}
      
         {/* <ListStats statsRentStation={statsRentStation}></ListStats> */}
      
          </tbody>
        </table>
      </div>



      <h2>Bicis con más alquileres</h2>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th className="col">#</th>
              <th className="col">Nombre de la estación</th>
              <th className="col">Número de reservas totales</th>
            </tr>
          </thead>
          <tbody>

              
        {statsRentStation.map((stat,index) =>
                
                <ListStats key={index}  stat={stat} />
              
            )}
      
         {/* <ListStats statsRentStation={statsRentStation}></ListStats> */}
      
          </tbody>
        </table>
      </div>


    </main>
  </div>
</div>

    );
  }