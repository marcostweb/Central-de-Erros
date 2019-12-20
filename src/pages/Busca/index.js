import React from 'react';

import usuarioLogado from '../../assets/usuario-logado.png'

export default function Busca({ history }){

  async function handleSubmit(event){
    event.preventDefault() 
    history.push('./logado') 
  }

  return (    
    <>
      <div className="row mb-4 align-items-center">
        <div className="col-10 col-md-10">
          <p className="my-0"><strong>Olá, seja bem-vindo.</strong> Seu token é: 56456456456dasdasdad454654654</p>
        </div>
        <div className="col-2 col-md-2 text-right pl-0">
          <img src={usuarioLogado} alt="Usuário Logado" width="40"/>
        </div>
      </div>  
      <form onSubmit={handleSubmit}>
        <div className="form-row">         
          <div className="col-6 col-md-3 col-lg-2 mb-3">
            <input className="btn btn-secondary w-100"
                type="submit" 
                id="password" 
                value="Voltar"
                title="Voltar"/>
          </div>
        </div>
      </form>
      <div className="row my-2">
        <div className="col-12 mb-4">
          <h3>Erro no 127.0.0.1 em 24/05/2019 10:15</h3>
        </div>
        <div className="col-12 col-md-8 mb-3">
          <strong className="mb-2 d-block">Título</strong>
          <p>Aceleration.Service.AddCandidate: Forbidden </p>
        </div>
        <div className="col-12 col-md-4 mb-3">
          <strong className="mb-2 d-block">Eventos</strong>
          <span>1000</span>
        </div>
        <div className="col-12 col-md-8 mb-3">
          <strong className="mb-2 d-block">Detalhes</strong>
          <p>ErrorDocument 400 /errors/404.html</p>
          <p>ErrorDocument 401 /errors/401.html</p>
          <p>ErrorDocument 400 /errors/404.html</p>
          <p>ErrorDocument 401 /errors/401.html</p>
        </div>
        <div className="col-12 col-md-4 mb-3">
          <strong className="mb-2 d-block">Coletado por:</strong>
          <span>54564568975454FSFSDFSFS56</span>
          <p>Marcos Roberto Teixeira</p>
        </div>
      </div>
    </>
  )
}