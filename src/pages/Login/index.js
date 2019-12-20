import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import base64 from 'base-64'
import { login } from '../../services/authenticated'

export default function Login({ history }){

  const [inputValue, setInputValue] = useState({
    username: '',
    password: ''
  })
  
  const { username, password } = inputValue
  
  async function handleSubmit(event){

    event.preventDefault() 
    
    const centralErrosUser = 'centraldeerro_id'
    const centralErrosPass = 'centraldeerro_secret'

    let form = new FormData()
    let headers = new Headers()

    form.append("grant_type", "password")
    form.append("username", username)
    form.append("password", password)

    headers.append('Authorization', 'Basic ' + base64.encode(centralErrosUser + ":" + centralErrosPass))

    fetch('https://centralerrosdev.herokuapp.com/oauth/token', {

    // fetch('http://localhost:8081/oauth/token', {
      method: 'POST',
      headers: headers,
      body: form
      })
      .then(response => response.json())
      .then(json => {
        if (!json.error) {
          login(json.access_token)
          history.push({
            pathname: '/logado',
            state: {
              username: username,
              accessToken: json.access_token,
              isLogado: localStorage.setItem('@central-de-erros-login', true) 
            }
          })
        } else {
          history.push('/erro') 
        }
      })
    }

  function handleChange (evt) {
    const name = evt.target.name
    const value = evt.target.value

    setInputValue({
      ...inputValue,
      [name]: value
    })
  }

return (    
  <>
    <div className="container-form my-4">  
      <div className="content"> 
        <h1>
            Login
        </h1>
          <form onSubmit={handleSubmit}>
              <input required
                type="text" 
                id="username" 
                placeholder="Seu usuário"
                value={ username }
                onChange={handleChange}
                name='username'
              />
              <input required
                type="password" 
                id="password" 
                placeholder="Digite sua senha"
                value={ password }
                maxLength="8"
                onChange={handleChange}
                name='password'
              />

              <button type="submit" className="btn btn-dark" title="Entrar no sistema">Entrar</button>
          </form>
          <p className="text-center my-3">Ainda não tem cadastro, <Link to="/register" title="Quero me cadastrar">clique aqui!</Link></p>
      </div>
    </div>
  </>
  )
}