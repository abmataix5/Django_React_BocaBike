import HomePage from "./pages/client/home"
import StationsPage from "./pages/client/stations"
import InfoPage from "./pages/client/infobike"
import Login from "./pages/client/login";
import Register from "./pages/client/register";
import {
  BrowserRouter,
  Routes, // Just Use Routes instead of "Switch"
  Route,
} from "react-router-dom";
import './App.css';
import Header from "./components/client/header"
import {BikesContextProvider} from "./context/BikesContext"
import {StationsContextProvider} from "./context/StationsContext"
import {UserContextProvider} from "./context/UserContext"

function App() {
  return (
    <div className="App">

  
      <BrowserRouter>

      <Header/>
      
        <UserContextProvider>
        <StationsContextProvider>
        <BikesContextProvider>

          <Routes>
            <Route exact path='/home' element={<HomePage/>}/>
            <Route exact path='/stations' element={<StationsPage/>}/> 
            <Route exact path='/info' element={<InfoPage/>}/> 
            <Route exact path='/login' element={<Login/>}/> 
            <Route exact path='/register' element={<Register/>}/> 
          </Routes>

        </BikesContextProvider>
        </StationsContextProvider>
        </UserContextProvider>

  
    </BrowserRouter>
     
    </div>
  );
}

export default App;
