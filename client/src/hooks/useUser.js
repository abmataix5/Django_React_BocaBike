import { useCallback, useContext, useState } from "react"; //evita que se vuelva a ejecutar una funcion
import UserContext from "../context/UserContext"
import loginService from "../services/login_service";
import registerService from "../services/register_service"

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
           /*  setJWT(data.user.token);  */
           
            window.location.reload();  
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




  const register_f = useCallback(
    (email, password, username) => {
      console.log(username)
      setState({ loading: true, error: false,loadingUser: false });
      registerService({ user: { email, password, username } })
        .then((data) => {
          console.log(data.user);
          if (data.errors){
            setState({loading:false,error:true, loadingUser: false})
          
            destroyToken()
          }else{
            setState({loading:false,error:false,loadingUser: false})
            saveToken(data.user.token)
          /*   setJWT(data.token);  */
            setUser(data.user)
              window.location.reload();  
          }
        })
        .catch((err) => {
          console.log(err);
          destroyToken()
          setState({loading:false,error:true,loadingUser: false})
        });
    },
    [setJWT]
  ); 

  const check_auth = () => {
    
    if(localStorage.getItem('id_token')){
      return true
    }
    return false
  }

  const logout = useCallback(() => {
    destroyToken()
   window.location.reload()
  }, [setJWT]);



  return {
    isLogged: check_auth(),
    login,
    jwt,
    user,
    state,
    register_f,
    logout,
    setUser

  };
}