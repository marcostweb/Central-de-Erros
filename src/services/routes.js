import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 

import Login from '../pages/Login'
import Register from '../pages/Register'
import Sucesso from '../pages/Sucesso'
import Erro from '../pages/Erro'
import Logado from '../pages/Logado'
import Busca from '../pages/Busca'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch> { /*garante que apenas uma rota vai ser executada por vez*/ }
                <Route path="/" exact component={ Login }></Route> { /* exact para ir exatamente a url / */ }
                <Route path="/register" component={ Register }></Route>
                <Route path="/sucesso" component={ Sucesso }></Route>
                <Route path="/erro" component={ Erro }></Route>
                <Route path="/logado" component={ Logado }></Route>
                <Route path="/busca" component={ Busca }></Route>
            </Switch>
        </BrowserRouter>
    );
}

