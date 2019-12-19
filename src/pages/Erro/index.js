import React from 'react'
import { Link } from 'react-router-dom'

import userInvalido from '../../assets/user-invalido.png'

export default function Erros(){
  return (    
    <>
      <div className="container-form my-4">  
        <div className="content"> 
          <div  className="text-center">
              <img src={userInvalido} alt="Página de Sucesso" width="70"/>
              <p className="text-center my-3">Usuário e/ou senha inválidos!</p>
              <p className="text-center"><Link to="/" title="Logar">Tente novamente!</Link></p>
          </div>
        </div>
      </div>
    </>
  )
}