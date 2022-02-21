    
import ApiService from './ApiService'


const RegisterService = {

  register(user) {

      return ApiService().post(`users/`,user);
  },

  

}
export default RegisterService;


 