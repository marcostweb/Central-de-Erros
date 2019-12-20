import React from 'react'
import Routes from './services/routes'

import logo from './assets/logo-central-de-erros-linhas.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="container mt-4 mt-lg-2">
      <div className="row">
        <div className="col-10 col-md-7 col-lg-4 mx-auto logo-central my-4 mt-md-5">
          <img src={logo} alt="Central de Erros"/>
        </div>
      </div>
      <div className="col-12 align-items-center px-0">
          <Routes></Routes>
      </div>
    </div>
  );
}

export default App
