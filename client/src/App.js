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


function App() {
  return (
    <div className="App">

  
      <BrowserRouter>

      <Header/>

        <BikesContextProvider>

          <Routes>
            <Route exact path='/home' element={<HomePage/>}/>
            <Route exact path='/stations' element={<StationsPage/>}/> 
            <Route exact path='/info' element={<InfoPage/>}/> 
          </Routes>

        </BikesContextProvider>
      

    </BrowserRouter>
     
    </div>
  );
}

export default App;
