import HomePage from "./pages/client/home"
import StationsPage from "./pages/client/stations"
import InfoPage from "./pages/client/infobike"
import {
  BrowserRouter,
  Routes, // Just Use Routes instead of "Switch"
  Route,
} from "react-router-dom";
import './App.css';
import Header from "./components/client/header"
import {BikesContextProvider} from "./context/BikesContext"
import {StationsContextProvider} from "./context/StationsContext"

function App() {
  return (
    <div className="App">

  
      <BrowserRouter>

      <Header/>
      
<        StationsContextProvider>
        <BikesContextProvider>

          <Routes>
            <Route exact path='/home' element={<HomePage/>}/>
            <Route exact path='/stations' element={<StationsPage/>}/> 
            <Route exact path='/info' element={<InfoPage/>}/> 
          </Routes>

        </BikesContextProvider>
        </StationsContextProvider>

    </BrowserRouter>
     
    </div>
  );
}

export default App;
