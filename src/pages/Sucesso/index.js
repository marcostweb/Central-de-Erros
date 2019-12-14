import React from 'react';
import { Link } from 'react-router-dom'

import setaDown from '../../assets/seta-down.svg'

export default function Sucesso(){
  return (    
    <>
      <div className="container-form my-4">  
        <div className="content"> 
          <div  className="text-center">
              <img src={setaDown} alt="Página de Sucesso" width="70"/>
              <p className="text-center my-3">Seu acesso foi cadastrado com sucesso!</p>
              <p className="text-center"><Link to="/" title="Logar">Voltar para Login!</Link></p>
          </div>
        </div>
      </div>
    </>
  )
}