import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import {isAuthenticated} from './authenticated'

import Login from '../pages/Login'
import Register from '../pages/Register'
import Sucesso from '../pages/Sucesso'
import Erro from '../pages/Erro'
import Logado from '../pages/Logado'
import Busca from '../pages/Busca'

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route 
            {...rest} 
            render={props => (
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            )
        )} />
    )
}

const Routes = () => (
    <BrowserRouter>
        <Switch> { /*garante que apenas uma rota vai ser executada por vez*/ }
            <Route path="/" exact component={ Login } /> { /* exact para ir exatamente a url / */ }
            <Route path="/erro" component={ Erro } />
            <Route path="/sucesso" component={ Sucesso } />
            <Route path="/register" component={ Register } />
            <PrivateRoute path="/logado" component={ Logado } />
            <PrivateRoute path="/busca" component={ Busca } />
        </Switch>
    </BrowserRouter>
)

export default Routes
