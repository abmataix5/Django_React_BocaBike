import axios from 'axios'

export default () => {
  const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8080/api/"
  })

/* Enviamos token */

  const token = localStorage.getItem('id_token')
  if (token ) {
    
    axiosInstance.defaults.headers.common['Authorization'] = `token ${token}`
 
  } 

 
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
     
        window.alert("NO TIENES PERMISOS")
      }
      return Promise.reject(error) 
    }
  )

  return axiosInstance
}