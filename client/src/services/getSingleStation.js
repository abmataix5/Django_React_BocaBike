export default async function getSingleStation(name) {
 
    const apiURL = `http://127.0.0.1:8080/api/stations/${name.name}/`
  
    return fetch(apiURL)
      .then((res) => res.json())
  
  }
  