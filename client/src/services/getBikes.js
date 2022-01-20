/* import {API_KEY, API_URL} from './settings' */

const fromApiResponseToGifs = apiResponse => {
    console.log(apiResponse);
  const {data = []} = apiResponse
  if (Array.isArray(data)) {
    const gifs = data.map(image => {
      const {images, title, id} = image
      const { url } = images.downsized_medium
      return { title, id, url }
    })
    return gifs
  }
  return []
}
console.log('entra');
export default function getGifs({
} = {}) {
  const apiURL = `http://127.0.0.1:8080/apis/v1/`

  return fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiResponseToGifs)
}