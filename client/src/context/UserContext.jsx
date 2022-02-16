import React, { useState } from "react";
import {getToken,destroyToken} from '../services/jwt_service'
import UserService from "../services/getUser";
const Context = React.createContext({});


export function UserContextProvider({ children }) {
  

    // funcion que intenta obtener su propio usuario con ese token (sirve para detectar tokens invalidos o expirados)
    
  const check_auth = () => {
       if (getToken()) {
       
    
         UserService.getUserData()
        .then(( data ) => {
         
          setUser(data.data.user)
      
          setJWT(data.data.user.token)
        })
        .catch(({ response }) => {
          console.log(response)
            destroyToken();
          window.location.reload(); 
          }); 
      } else {
        destroyToken();
      } 
    } 

    // por defecto se obtiene del localStorage (comprobando el login) le asignamos una funcion por si se vuelve a renderizar.
    const [jwt, setJWT] = useState(() => check_auth());


  const [user, setUser] = useState(null)
  const [admin, setAdmin] = useState(null)



  return (
    <Context.Provider value={{ user,setUser, setAdmin,admin,jwt,setJWT }}>{children}</Context.Provider>
  );
}

export default Context;