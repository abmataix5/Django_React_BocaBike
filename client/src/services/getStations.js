export default async function getStations() {

  const apiURL = `http://127.0.0.1:8080/api/stations/`

  return fetch(apiURL)
    .then((res) => res.json())

}
