import React from "react";
import NavDashboard from "../../components/admin/navDashboard"
import ListStats from "../../components/admin/listStats"
import { useStats } from "../../hooks/useStats";


export default function Dashboard() {


  const {statsRentStation,statsRentBike,statsRentUser} = useStats();

 
  return (

  
    <div className="container-fluid mt">
      <div className="row">

      <NavDashboard></NavDashboard>

        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      

      {/* Estaciones más utilizadas */}

          <h2>Estaciones con más alquileres</h2>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th className="col">ID</th>
                  <th className="col">Nombre de la estación</th>
                  <th className="col">Número de reservas totales</th>
                </tr>
              </thead>
              <tbody>

                  
            {statsRentStation.map((stat,index) =>
                    
                    <ListStats key={index}  stat={stat} />
                  
            )}
        
          
              </tbody>
            </table>
          </div>


      {/* Bicis más utilizadas */}

          <h2>Top 5 bicis más usadas</h2>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th className="col">ID</th>
                  <th className="col">Numero de la bici</th>
                  <th className="col">Número de reservas totales</th>
                </tr>
              </thead>
              <tbody>

                  
                {statsRentBike.map((stat,index) =>
                        
                        <ListStats key={index}  stat={stat} />
                      
                )}
          
          
          
              </tbody>
            </table>
          </div>



        {/* Usuarios más activos */}
        

          <h2>Top 5 usuarios más activos</h2>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th className="col">ID</th>
                  <th className="col">Nombre del usuario</th>
                  <th className="col">Número de reservas totales</th>
                </tr>
              </thead>
              <tbody>

                    
              {statsRentUser.map((stat,index) =>
                      
                      <ListStats key={index}  stat={stat} />
                    
              )} 

          
              </tbody>
            </table>
          </div>


        </main>
      </div>
    </div>

  );
}