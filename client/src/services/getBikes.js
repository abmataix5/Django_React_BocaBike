export default function getBikes() {

  const apiURL = `http://127.0.0.1:8080/api/bikes/`

  return fetch(apiURL)
    .then((res) => res.json())

}