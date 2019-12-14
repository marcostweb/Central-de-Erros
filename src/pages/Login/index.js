import React, { useState } from 'react';
import { Link } from 'react-router-dom'
// import api from '../../services/api';

export default function Login({ history }){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(event){
    event.preventDefault() // não recarrega a págica que é o padrão

    // const response = await api.post('/sessions', { email })

    // const { _id } = response.data;

    // localStorage.setItem('user', _id) //salva na local storage

    history.push('./logado') // muda pra rota ./dashboard
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
                  value={ email }
                  onChange={event => setEmail(event.target.value)}/>

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