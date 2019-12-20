export const isAuthenticated = () => {

  const API_TOKEN = '@central-de-erros-login'
  const value = localStorage.getItem(API_TOKEN)
  return value !== null
  
}

export const TOKEN_KEY = "@central-de-erros-token"
export const getToken = () => localStorage.getItem(TOKEN_KEY)

export const login = (token) => {
  localStorage.setItem(TOKEN_KEY, token)
}