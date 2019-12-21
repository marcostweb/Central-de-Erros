import React from 'react'
import { getToken } from '../../services/authenticated'

import usuarioLogado from '../../assets/usuario-logado.png'

export default function Logado({ history }){

  async function handleSubmit(event){
    event.preventDefault() 
    history.push('/busca') 
  }

  async function closeLogin(event){
    event.preventDefault() 
    localStorage.clear() 
    history.push('/') 
  }

  return (    
    <>
      <div className="row mb-4 align-items-center">
        <div className="col-10 col-md-10">
          <p className="my-0"><strong>Olá, seja bem-vindo.</strong> Seu token de acesso é: { getToken() } </p>
        </div>
        <div className="col-2 col-md-2 text-center text-lg-right pl-0">
          <span onClick={closeLogin} className="my-1 mx-1 cursor-pointer">Sair</span>
          <img src={usuarioLogado} alt="Usuário Logado" width="40"/>
        </div>
      </div>  
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="col-12 col-md-6 col-lg-3 mb-3">
            <label className="mr-sm-2 sr-only" for="inlineFormCustomSelect"></label>
            <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
              <option selected>Selecione...</option>
              <option value="prod">Produção</option>
              <option value="hml">Homologação</option>
              <option value="dev">Dev</option>
            </select>
          </div>
          <div className="col-6 col-lg-2 mb-3">
            <label className="mr-sm-2 sr-only" for="inlineFormCustomSelectOrdem"></label>
            <select className="custom-select mr-sm-2" id="inlineFormCustomSelectOrdem">
              <option selected>Ordenar por...</option>
              <option value="level">Level</option>
              <option value="freq">Frequência</option>
            </select>
          </div>
          <div className="col-6 col-lg-2 mb-3">
            <label className="mr-sm-2 sr-only" for="inlineFormCustomSelectBusca"></label>
            <select className="custom-select mr-sm-2" id="inlineFormCustomSelectBusca">
              <option selected>Buscar por...</option>
              <option value="level">Level</option>
              <option value="desc">Decrição</option>
              <option value="origem">Origem</option>
            </select>
          </div>
          <div className="col-12 col-md-6 col-lg-5 mb-3">
            <div id="custom-search-input">
              <div className="input-group">
                  <input type="text" className="form-control input-lg" placeholder="Buscar" />
                  <span className="busca">
                      <button className="btn" type="submit" title="Buscar"/>
                  </span>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 col-lg-2 mb-3">
            <input className="btn btn-dark w-100"
              type="button" 
              id="email" 
              value="Arquivar"
              title="Arquivar"/>
          </div>
          <div className="col-6 col-md-3 col-lg-2 mb-3">
            <input className="btn btn-secondary w-100"
                type="button" 
                id="password" 
                value="Apagar"
                title="Apagar"/>
          </div>
        </div>

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">
                <div className="custom-control custom-checkbox my-1 mr-sm-2">
                  <input type="checkbox" className="custom-control-input" id="customControlInlineLevel"/>
                  <label className="custom-control-label" for="customControlInlineLevel">LEVEL</label>
                </div>
              </th>
              <th scope="col">LOG</th>
              <th scope="col" className="text-center">EVENTOS</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <th scope="row">
                  <div className="custom-control custom-checkbox my-1 mr-sm-2">
                    <input type="checkbox" className="custom-control-input" id="customControlInlineError"/>
                    <label className="custom-control-label" for="customControlInlineError" >Error</label>
                  </div>
                </th>
                <td>Descrição do log de erros</td>
                <td className="text-center">25</td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="custom-control custom-checkbox my-1 mr-sm-2">
                    <input type="checkbox" className="custom-control-input" id="customControlInlineWarning"/>
                    <label className="custom-control-label" for="customControlInlineWarning">Warning</label>
                  </div>
                </th>
                <td>Descrição do log de erros</td>
                <td className="text-center">16</td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="custom-control custom-checkbox my-1 mr-sm-2">
                    <input type="checkbox" className="custom-control-input" id="customControlInlineDebug"/>
                    <label className="custom-control-label" for="customControlInlineDebug">Debug</label>
                  </div>
                </th>
                <td>Descrição do log de erros</td>
                <td className="text-center">20</td>
              </tr>
          </tbody>
        </table>
      </form>
    </>
  )
}