export const isAuthenticated = () => {

  const API_TOKEN = '@central-de-erros-login'
  const value = localStorage.getItem(API_TOKEN)
  return value !== null
  
}