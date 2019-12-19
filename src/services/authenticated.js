
const API_TOKEN = '@central-de-erros-login'
const value = localStorage.getItem(API_TOKEN)

export const isAuthenticated = () => {

  if (value !== null) {
    return true
  } else {
    return false
  }
      
}