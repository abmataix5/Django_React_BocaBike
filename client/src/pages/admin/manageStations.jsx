import React from "react";
import NavDashboard from "../../components/admin/navDashboard"
import ListStationsAdmin from "../../components/admin/listStation";
import { useStations } from "../../hooks/useStations";


export default function ManageStations() {

    const {stations} = useStations()

    return (

  
        <div className="container-fluid mt">
        <div className="row">

            <NavDashboard></NavDashboard>

            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        

        

            <h2>Administrar estaciones</h2>
            
                <ListStationsAdmin stations={stations}/>

            </main>
        </div>
        </div>

    );
  }