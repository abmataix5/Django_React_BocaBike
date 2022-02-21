import React, { Suspense } from "react";
import Loading from 'react-simple-loading';
import {
  BrowserRouter,
  Routes, // Just Use Routes instead of "Switch"
  Route,
} from "react-router-dom";
import './App.css';
import Header from "./components/client/header"
import Footer from "./components/client/footer"
import {BikesContextProvider} from "./context/BikesContext"
import {StationsContextProvider} from "./context/StationsContext"
import {UserContextProvider} from "./context/UserContext"
import { RentsContextProvider } from "./context/RentsContext";
import { IncidentsContextProvider } from "./context/IncidentsContext";

const HomePage = React.lazy(() => import("./pages/client/home"));
const StationsPage = React.lazy(() => import("./pages/client/stations"));
const InfoPage = React.lazy(() => import("./pages/client/infobike"));
const Login = React.lazy(() => import("./pages/client/login"));
const Register = React.lazy(() => import("./pages/client/register"));
const StationDetail = React.lazy(() => import("./pages/client/OneStation"));
const Dashboard = React.lazy(() => import("./pages/admin/dashboard"));
const ManageBikes =  React.lazy(() => import("./pages/admin/manageBikes"));
const ManageStations =  React.lazy(() => import("./pages/admin/manageStations"));
const ManageIncidents =  React.lazy(() => import("./pages/admin/manageIncidents"));


function App() {



  return (

    <Suspense fallback={<h1>Cargando datos de la página...<Loading/></h1>}>

      <div className="App">

    
        <BrowserRouter>

        <RentsContextProvider>
        <StationsContextProvider>
        <BikesContextProvider>
        <IncidentsContextProvider>
        <UserContextProvider>

          <Header/>

                      <Routes>
                        <Route exact path='/' element={<HomePage/>}/>
                        <Route exact path='/stations' element={<StationsPage/>}/> 
                        <Route exact path='/info' element={<InfoPage/>}/> 
                        <Route exact path='/login' element={<Login/>}/> 
                        <Route exact path='/register' element={<Register/>}/> 
                        <Route exact path='/stationDetail/:name' element={<StationDetail/>}/> 
                        <Route exact path='/dashboard' element={<Dashboard/>}/> 
                        <Route exact path='/manageBikes' element={<ManageBikes/>}/> 
                        <Route exact path='/manageStations' element={<ManageStations/>}/> 
                        <Route exact path='/manageIncidents' element={<ManageIncidents/>}/> 
                    
                      </Routes>

                  
                    
            </UserContextProvider>
            </IncidentsContextProvider>
            </BikesContextProvider>
            </StationsContextProvider>
            </RentsContextProvider>
         
    
      </BrowserRouter>
      
      </div>

    </Suspense>
  );
}

export default App;
