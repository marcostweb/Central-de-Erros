import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api';

export default function Login({ history }){
  
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  
  async function handleSubmit(event){

    event.preventDefault() // não recarrega a página que é o padrão.
    
    const response = await api.post('/sessions', { userName, password })
    
    if ((userName === response.data.userName) && (password === response.data.password)) {
      localStorage.setItem('@central-de-erros-login', true) //Salva true em localStorage.
      history.push('./logado') // Leva para a tela de busca.
     // window.location.reload()
    } else {
      history.push('./erro') // Leva para a mensagem de erro caso o login esteja errado.
    } 

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
                  id="userName" 
                  placeholder="Seu usuário"
                  value={ userName }
                  onChange={event => setUserName(event.target.value)}/>

              <input required
                  type="password" 
                  id="password" 
                  placeholder="Digite sua senha"
                  value={ password }
                  maxLength="8"
                  onChange={event => setPassword(event.target.value)}/>

              <button type="submit" className="btn btn-dark" title="Entrar no sistema">Entrar</button>
          </form>
          <p className="text-center my-3">Ainda não tem cadastro, <Link to="/register" title="Quero me cadastrar">clique aqui!</Link></p>
      </div>
    </div>
  </>
  )
}