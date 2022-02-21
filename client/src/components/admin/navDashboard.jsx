import React from 'react'
import { Link } from 'react-router-dom';


export default function NavDashboard () {


  
    return (


      <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-dark  sidebar collapse">

        <div className="position-sticky pt-3 ">

          <ul className="nav flex-column text-white">

            <li className="nav-item">
             <Link to={'/dashboard'} className="nav-link active text-white">Estadisticas</Link>
            </li>

            <li className="nav-item mt-4">
              <Link to={'/manageBikes'} className="nav-link active text-white">Administrar Bicicletas</Link>
            </li>

            <li className="nav-item text-white  mt-4">
             <Link to={'/manageStations'} className="nav-link active text-white">Administrar Estaciones</Link>
            </li>

            <li className="nav-item  mt-4">
              <Link to={'/manageIncidents'} className="nav-link active text-white">Administrar Incidencias</Link>
            </li>

          </ul>
          
        </div>

      </nav>


    )
  }