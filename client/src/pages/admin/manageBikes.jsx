import React from "react";
import NavDashboard from "../../components/admin/navDashboard"
import { useBikes } from "../../hooks/useBikes"; 
import ListBikes from "../../components/admin/listBikes";
import Loading from 'react-simple-loading';

export default function ManageBikes() {


const {bikes} = useBikes()



    return (


      
  
        <div className="container-fluid mt">
        <div className="row">

            <NavDashboard></NavDashboard>

            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    
            <h2>Todas nuestra bicis disponibles</h2>

                <ListBikes bikes={bikes}/>
            
            </main>
        </div>
        </div>

    );
  }