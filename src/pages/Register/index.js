import React, { useState } from 'react';
//import api from '../../services/api';

export default function Register({ history }){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(event){
    event.preventDefault() // não recarrega a págica que é o padrão

    //const response = await api.post('/sessions', { email })

    //const { _id } = response.data;

    //localStorage.setItem('user', _id) //salva na local storage

    history.push('./sucesso') // muda pra rota ./página sucesso
  }

  return (    
    <>
     <div className="container-form my-4">  
        <div className="content"> 
          <h1>
              Cadastro
          </h1>
          <form onSubmit={handleSubmit}>
              <input required
                  type="email" 
                  id="email" 
                  placeholder="Seu e-mail"
                  value={ email }
                  onChange={event => setEmail(event.target.value)}/>

              <input required
                  type="password" 
                  id="password" 
                  placeholder="Digite sua senha"
                  value={ password }
                  maxLength="8"
                  onChange={event => setPassword(event.target.value)}/>

              <button type="submit" className="btn btn-dark" title="Cadastrar">Cadastrar</button>
          </form>
        </div>
      </div>
    </>
  )
}