import { useCallback, useContext, useState } from "react"; //evita que se vuelva a ejecutar una funcion
import UserContext from "../context/UserContext"
import LoginService from "../services/login_service";
import registerService from "../services/register_service"
import UserService from "../services/getUser";
import {saveToken,destroyToken,getToken} from '../services/jwt_service'




export function useUser() {

  const { jwt, setJWT } = useContext(UserContext);
  const { user, setUser } = useContext(UserContext);
  const [ state, setState ] = useState({ loading: false, error: false, loadingUser: true});



  const login = useCallback(
    (email, password) => {
      setState({ loading: true, error: false, loadingUser: true });
      LoginService.login({ user: { email, password } })
        .then((data) => {
 
          
            setState({loading:false,error:false, loadingUser: false})
            saveToken(data.data.user.token)
            setJWT(data.data.user.token);
            setUser(UserService.getUserData()) 
        
            window.location.reload();    
          
          
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
      registerService.register({ user: { email, password, username } })
        .then((data) => {
      
            setState({loading:false,error:false,loadingUser: false})
            saveToken(data.data.user.token)
            setJWT(data.data.token);  
  
            window.location.reload();  
          
        })
        .catch((err) => {
        
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