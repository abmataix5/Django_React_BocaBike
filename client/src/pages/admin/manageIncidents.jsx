import React from "react";
import NavDashboard from "../../components/admin/navDashboard"
import { useBikes } from "../../hooks/useBikes"; 
import { useIncidents } from "../../hooks/useIncidents";
import Loading from 'react-simple-loading';
import Listincidents from "../../components/admin/listIncidents";
export default function ManageIncidents() {


    const {incidents  } = useIncidents()

    console.log(incidents)

    return (

  
  
        <div className="container-fluid mt">
        <div className="row">

            <NavDashboard></NavDashboard>

            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        

        

                 <h2>Todas las incidencias</h2>

                 <section >

                    <div className="container my-5 py-5">

                        <div className="row d-flex justify-content-center">
                        <div className="col-md-12 col-lg-10">

                            <div className="card text-dark">
                                <div className="card-body p-4 mt-5">
                            
                                {incidents.map((incident,index) =>
                
                                    <Listincidents key={index}  incident={incident} />
              
                                )}
                                
                         
                            
                
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                </section>

                 
                 
            
            </main>
        </div>
        </div>
      
 

    );
  }