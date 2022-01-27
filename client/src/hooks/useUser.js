import { useCallback, useContext, useState } from "react"; //evita que se vuelva a ejecutar una funcion
import UserContext from "../context/UserContext"
import loginService from "../services/login_service";

import {saveToken,destroyToken,getToken} from '../services/jwt_service'




export function useUser() {
  const { jwt, setJWT } = useContext(UserContext);
  const { user, setUser } = useContext(UserContext);
  const [ state, setState ] = useState({ loading: false, error: false, loadingUser: true});



  const login = useCallback(
    (email, password) => {
      setState({ loading: true, error: false, loadingUser: true });
      loginService({ user: { email, password } })
        .then((data) => {
            console.log(data.user.token)
          if (data.errors){
            setState({loading:false,error:true, loadingUser: false})
          
            destroyToken()
          }else{
            setState({loading:false,error:false, loadingUser: false})
            saveToken(data.user.token)
            setUser(data.user)
           /*  setJWT(data.user.token); */
   /*       
            window.location.reload(); */
          }
          
        })
        .catch((err) => {
            console.log(err);
          destroyToken()
          setState({loading:false,error:true, loadingUser: false})
        });
    },
    [setJWT]
  ); //cada vez que cambie setJWT la funcion login se vuelve a crear

  const check_auth = () => {
      console.log(user)
    if(user){
      return true
    }
    return false
  }



  return {
    isLogged: check_auth(),
    login,
    jwt,
    user,
    state

  };
}