import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 

import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import New from '../pages/New'
import Register from '../pages/Register'
import Sucesso from '../pages/Sucesso'
import Logado from '../pages/Logado'
import Busca from '../pages/Busca'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch> { /*garante que apenas uma rota vai ser executada por vez*/ }
                <Route path="/" exact component={ Login }></Route> { /* exact para ir exatamente a url / */ }
                <Route path="/dashboard" component={ Dashboard }></Route>
                <Route path="/new" component={ New }></Route>
                <Route path="/register" component={ Register }></Route>
                <Route path="/sucesso" component={ Sucesso }></Route>
                <Route path="/logado" component={ Logado }></Route>
                <Route path="/busca" component={ Busca }></Route>
            </Switch>
        </BrowserRouter>
    );
}

