import ApiService from './ApiService'
import { destroyToken } from './jwt_service';

  const UserService = {

  
    getUserData() {
      
       return ApiService().get('user/');
    }

    

}
export default UserService;

 