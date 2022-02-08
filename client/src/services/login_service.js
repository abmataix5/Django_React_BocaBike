  
import ApiService from './ApiService'


  const LoginService = {

    login(user) {

        return ApiService().post(`users/login/`,user);
    },

    

}
export default LoginService;

 