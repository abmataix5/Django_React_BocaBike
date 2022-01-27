export default async function registerService(user) {

    const apiURL = (`http://127.0.0.1:8080/api/users/`,user)
  
    return fetch(apiURL)
      .then((res) => {
          
        res.json()

      }).catch(({ res }) => {
        console.log(res.data);
        return res.data
      });
  
  }