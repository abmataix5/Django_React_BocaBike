import React, { useState } from "react";
import {getToken,destroyToken} from '../services/jwt_service'
import UserService from "../services/getUser";
const Context = React.createContext({});


export function UserContextProvider({ children }) {
  

   
  const check_auth = () => {
       if (getToken()) {
       
    
         UserService.getUserData()
        .then(( data ) => {
    
         localStorage.setItem('isAdmin',data.data.user.is_staff)
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

  const [jwt, setJWT] = useState(() => check_auth());
  const [user, setUser] = useState(null)
  const [admin, setAdmin] = useState(null)



  return (
    <Context.Provider value={{ user,setUser, setAdmin,admin,jwt,setJWT }}>{children}</Context.Provider>
  );
}

export default Context;