const ID_TOKEN_KEY = "id_token";

export const getToken = () => {
  console.log('asas')
    return window.localStorage.getItem(ID_TOKEN_KEY);
  };
  
  export const saveToken = token => {
    window.localStorage.setItem(ID_TOKEN_KEY, token);
  };
  
  export const destroyToken = () => {
    window.localStorage.removeItem('admin')
    window.localStorage.removeItem(ID_TOKEN_KEY);
  };
  
  export default { getToken, saveToken, destroyToken };