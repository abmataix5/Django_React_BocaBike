export default async function loginService(user) {

    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    const apiURL = (`http://127.0.0.1:8080/api/users/login/`)
  
    return fetch(apiURL,requestOptions)
    .then(response => response.json())
  
  
  }

 