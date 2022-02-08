import axios from 'axios'

export default () => {
  const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8080/api/"
  })

/* Enviamos token */
  const admin = localStorage.getItem('admin')
  const token = localStorage.getItem('token')
  if (token ) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
    axiosInstance.defaults.headers.common['Admin'] = `Admin ${admin}`
    console.log(token);
 
  } 

 
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
      /*   localStorage.removeItem('token')
        localStorage.removeItem('admin') */
        window.alert("NO TIENES PERMISOS")
      }
      return Promise.reject(error) 
    }
  )

  return axiosInstance
}