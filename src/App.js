import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { store, persistor } from './store/';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


/* Páginas */
import Login from './view/login/';
import Painel from './view/painel/';
import Cadastro from './view/cadastro/';
import Clientes from './view/clientes/';
import Configuracoes from './view/configuracoes/';
import Mensagens from './view/mensagens/';
import Recuperar from './view/recuperar-senha/';
import NovoCliente from './view/novo-cliente/';

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/cadastro" component={Cadastro} />
                    <Route exact path="/painel" component={Painel} />
                    <Route exact path="/clientes" component={Clientes} />
                    <Route exact path="/configuracoes" component={Configuracoes} />
                    <Route exact path="/mensagens" component={Mensagens} />
                    <Route exact path="/recuperar-senha" component={Recuperar} />
                    <Route exact path="/novo-cliente" component={NovoCliente} />
                </Router>
            </PersistGate>
        </Provider>

    );
}

export default App;