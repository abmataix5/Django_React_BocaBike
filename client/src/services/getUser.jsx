import ApiService from './ApiService'
import { destroyToken } from './jwt_service';

  const UserService = {

  
    getUserData() {
      
        ApiService().get('user/')
        .then(({ data }) => {
          console.log(data.user)
          localStorage.setItem('id_user_active',data.user.id)
          return data.user
        })
        .catch(({ response }) => {
            console.log(response)
            destroyToken();
            window.location.reload(); 
        });
      },

    

}
export default UserService;

 