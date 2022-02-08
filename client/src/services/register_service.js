/*   export default async function registerService(user) {

    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    const apiURL = (`http://127.0.0.1:8080/api/users/`)
  
    return fetch(apiURL,requestOptions)
    .then(response => response.json())
  
  
  } */

    
import ApiService from './ApiService'


const RegisterService = {

  register(user) {

      return ApiService().post(`users/`,user);
  },

  

}
export default RegisterService;


 