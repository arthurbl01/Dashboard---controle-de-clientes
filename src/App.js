import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import  store  from './store';

/* Páginas */

import Login from './view/login/';
import Painel from './view/painel/';
import Cadastro from './view/cadastro/';
import Configuracoes from './view/configuracoes/';
import Mensagens from './view/mensagens/';
import Clientes from './view/clientes/';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Route exact path="/" component={Login} />
                <Route exact path="/cadastro" component={Cadastro} />
                <Route exact path="/painel" component={Painel} />
                <Route exact path="/mensagens" component={Mensagens} />
                <Route exact path="/configuracoes" component={Configuracoes} />
                <Route exact path="/clientes" component={Clientes} />
            </Router>
        </Provider>

    );
}

export default App;