import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import api from '../../services/api';

export default function Login({ history }){
  
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(event){
    event.preventDefault() // não recarrega a página que é o padrão

    const myUserName = await api.post('/sessions', { userName })
    const myPassword = await api.post('/sessions', { password })

    console.log("Usuario", userName)
    console.log("Senha", password)

    if ((userName === myUserName.data.userName) && (password === myPassword.data.password)) {
      localStorage.setItem('@central-de-erros-login', true) //Salva true/false em local storage.
      history.push('./logado') // Mudança de rota.
    } else {
      history.push('./erro') // Mudança de rota.
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