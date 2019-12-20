import React, { useState } from 'react'

export default function Register({ history }){
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(event){
    event.preventDefault() 
    history.push('/sucesso') 
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
                  type="text" 
                  id="username" 
                  placeholder="Seu usuário"
                  value={ username }
                  onChange={event => setUserName(event.target.value)}/>

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