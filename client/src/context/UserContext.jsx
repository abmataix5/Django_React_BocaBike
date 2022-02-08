import React, { useState } from "react";
/* import {getToken,destroyToken} from '../services/jwt_service'
import {ApiService} from '../services/api.service' */
const Context = React.createContext({});

export function UserContextProvider({ children }) {
  

  const [user, setUser] =useState(null)
  const [admin, setAdmin] =useState(localStorage.getItem('admin'))



  return (
    <Context.Provider value={{ user,setUser, setAdmin,admin }}>{children}</Context.Provider>
  );
}

export default Context;