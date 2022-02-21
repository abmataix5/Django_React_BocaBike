import { useCallback, useContext, useState } from "react"; 
import UserContext from "../context/UserContext"
import LoginService from "../services/login_service";
import registerService from "../services/register_service"
import {saveToken,destroyToken,getToken} from '../services/jwt_service'




export function useUser() {

  const { jwt, setJWT } = useContext(UserContext);
  const { user, setUser } = useContext(UserContext);
  const [ state, setState ] = useState({ loading: false, error: false, loadingUser: true});




  const login = useCallback((email, password) => {
 
      setState({ loading: true, error: false, loadingUser: true });
      LoginService.login({ user: { email, password } })
        .then((data) => {
 
          
            setState({loading:false,error:false, loadingUser: false})
            saveToken(data.data.user.token)
            setJWT(data.data.user.token);
            saveUser(data.data.user)
       
          window.location.reload();      
          
          
        })
        .catch((err) => {
            console.log(err);
          destroyToken()
          setState({loading:false,error:true, loadingUser: false})
        });
    },
    [setJWT]
  ); 




  const register_f = useCallback((email, password, username) => {
  
      console.log(username)
      setState({ loading: true, error: false,loadingUser: false });
      registerService.register({ user: { email, password, username } })
        .then((data) => {
      
            setState({loading:false,error:false,loadingUser: false})
            saveToken(data.data.user.token)
            setJWT(data.data.user.token);  
            localStorage.setItem('admin',data.data.user.is_staff)
  
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



  const check_admin = () => {
    
    if(localStorage.getItem('isAdmin') === true){
      return true
    }
    return false
  }
 



  const logout = useCallback(() => {

    localStorage.clear()
    destroyToken()
    window.location.href = "http://localhost:3000/";

  }, [setJWT]);



  const saveUser = (user) => {

    setUser(user);
    
  }




  return {
    isLogged: check_auth(),
    login,
    jwt,
    user,
    state,
    register_f,
    logout,
    setUser,
    isAdminLogged : check_admin()


  };
}