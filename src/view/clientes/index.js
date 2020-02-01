import React, {  } from 'react';
import './style.css';
import 'firebase/auth';
import { FaCogs, FaCopy, FaComments, FaUserFriends, FaSignInAlt, FaOutdent } from 'react-icons/fa';
import { useSelector } from 'react-redux';

function Home({match}) {
    return (
        <div className="dashboard">
            
            <div className="corpo-menu-vertical">
                <div className="corpo-img-menu-vertical">
                    <FaOutdent className="img-menu-vertical" />
                </div>
                <img className="img-perfil-vertical" src="/img/eu.png" alt="minha-foto" />
                <h1 className="nome-perfil-vertical"> Arthur BL </h1>
                <h1 className="cargo-perfil-vertical"> CEO </h1>

                <a href="/painel" className="item-menu-vertical" >
                    <FaCopy className="img-item-menu-vertical" />
                    <h1 className="nome-item-menu-vertical" > Painel de Controle</h1>
                </a>
                <a href="/mensagens" className="item-menu-vertical">
                    <FaComments className="img-item-menu-vertical" />
                    <h1 className="nome-item-menu-vertical"> Mensagens</h1>
                </a>
                <a href="/clientes" className="item-menu-vertical" id="ativo">
                    <FaUserFriends className="img-item-menu-vertical" id="ativo-icon" />
                    <h1 className="nome-item-menu-vertical" id="ativo-texto"> Clientes</h1>
                </a>
                <a href="/configuracoes" className="item-menu-vertical">
                    <FaCogs className="img-item-menu-vertical" />
                    <h1 className="nome-item-menu-vertical"> Configurações</h1>
                </a>

                <a href="/" className="item-menu-vertical-sair">
                    <FaSignInAlt className="img-item-menu-vertical" />
                    <h1 className="nome-item-menu-vertical"> Sair</h1>
                </a>


            </div>

            <div className="container">


                <section className="menu">
                    <div className="menu-esquerdo">
                        <h1 className="titulo-menu"> <> {useSelector(state => state.usuarioLogado)} {useSelector(state => state.usuarioEmail)} </> </h1>
                    </div>

                    <div className="menu-centro">
                        <input className="input-pesquisar" type="text" placeholder="Pesquisar por Cliente" />
                        <button className="btn-pesquisar">Pesquisar</button>
                    </div>

                    <div className="menu-direito">
                        <button className="btn-novo-cliente">Novo Cliente</button>
                        <img className="logo-menu" src="/img/logo.png" alt="logo-foto"/>

                    </div>
                </section>


                <section className="corpo-itens">
                    <div className="itens">
                        <div className="item">
                            <div className="corpo-menu-item">
                                <img className="menu-item" src="/img/menu-item.png" alt="item-foto"/>
                            </div>
                            <div className="dados-item">
                                <img className="img-item" src="/img/f1.png" alt="cliente-foto" />
                                <h1 className="nome-item"> Beatriz Souza </h1>
                                <h1 className="status-item"> Ativo </h1>
                            </div>
                        </div>

                        <div className="item">
                            <div className="corpo-menu-item">
                                <img className="menu-item" src="/img/menu-item.png" alt="item-foto"/>
                            </div>
                            <div className="dados-item">
                                <img className="img-item" src="/img/f1.png" alt="cliente-foto"/>
                                <h1 className="nome-item"> Beatriz Souza </h1>
                                <h1 className="status-item"> Ativo </h1>
                            </div>
                        </div>

                        <div className="item">
                            <div className="corpo-menu-item">
                                <img className="menu-item" src="/img/menu-item.png" alt="item-foto" />
                            </div>
                            <div className="dados-item">
                                <img className="img-item" src="/img/f1.png" alt="cliente-foto"/>
                                <h1 className="nome-item"> Beatriz Souza </h1>
                                <h1 className="status-item"> Ativo </h1>
                            </div>
                        </div>

                        <div className="item">
                            <div className="corpo-menu-item">
                                <img className="menu-item" src="/img/menu-item.png" alt="item-foto" />
                            </div>
                            <div className="dados-item">
                                <img className="img-item" src="/img/f1.png" alt="cliente-foto"/>
                                <h1 className="nome-item"> Beatriz Souza </h1>
                                <h1 className="status-item"> Ativo </h1>
                            </div>
                        </div>

                        <div className="item">
                            <div className="corpo-menu-item">
                                <img className="menu-item" src="/img/menu-item.png" alt="item-foto"/>
                            </div>
                            <div className="dados-item">
                                <img className="img-item" src="/img/f1.png" alt="cliente-foto"/>
                                <h1 className="nome-item"> Beatriz Souza </h1>
                                <h1 className="status-item"> Ativo </h1>
                            </div>
                        </div>
                        <div className="item">
                            <div className="corpo-menu-item">
                                <img className="menu-item" src="/img/menu-item.png" alt="item-foto"/>
                            </div>
                            <div className="dados-item">
                                <img className="img-item" src="/img/f1.png"alt="cliente-foto" />
                                <h1 className="nome-item"> Beatriz Souza </h1>
                                <h1 className="status-item"> Ativo </h1>
                            </div>
                        </div>
                        <div className="item">
                            <div className="corpo-menu-item">
                                <img className="menu-item" src="/img/menu-item.png" alt="item-foto"/>
                            </div>
                            <div className="dados-item">
                                <img className="img-item" src="/img/f1.png" alt="cliente-foto"/>
                                <h1 className="nome-item"> Beatriz Souza </h1>
                                <h1 className="status-item"> Ativo </h1>
                            </div>
                        </div>


                        <div className="item">
                            <div className="corpo-menu-item">
                                <img className="menu-item" src="/img/menu-item.png" alt="item-foto" />
                            </div>
                            <div className="dados-item">
                                <img className="img-item" src="/img/f1.png" alt="cliente-foto"/>
                                <h1 className="nome-item"> Beatriz Souza </h1>
                                <h1 className="status-item"> Ativo </h1>
                            </div>
                        </div>

                        <div className="item">
                            <div className="corpo-menu-item">
                                <img className="menu-item" src="/img/menu-item.png" alt="item-foto"/>
                            </div>
                            <div className="dados-item">
                                <img className="img-item" src="/img/f1.png" alt="cliente-foto"/>
                                <h1 className="nome-item"> Beatriz Souza </h1>
                                <h1 className="status-item"> Ativo </h1>
                            </div>
                        </div>

                        <div className="item">
                            <div className="corpo-menu-item">
                                <img className="menu-item" src="/img/menu-item.png" alt="item-foto"/>
                            </div>
                            <div className="dados-item">
                                <img className="img-item" src="/img/f1.png" alt="cliente-foto"/>
                                <h1 className="nome-item"> Beatriz Souza </h1>
                                <h1 className="status-item"> Ativo </h1>
                            </div>
                        </div>

                        <div className="item">
                            <div className="corpo-menu-item">
                                <img className="menu-item" src="/img/menu-item.png" alt="item-foto"/>
                            </div>
                            <div className="dados-item">
                                <img className="img-item" src="/img/f1.png" alt="cliente-foto"/>
                                <h1 className="nome-item"> Beatriz Souza </h1>
                                <h1 className="status-item"> Ativo </h1>
                            </div>
                        </div>

                        <div className="item">
                            <div className="corpo-menu-item">
                                <img className="menu-item" src="/img/menu-item.png" alt="item-foto"/>
                            </div>
                            <div className="dados-item">
                                <img className="img-item" src="/img/f1.png" alt="cliente-foto"/>
                                <h1 className="nome-item"> Beatriz Souza </h1>
                                <h1 className="status-item"> Ativo </h1>
                            </div>
                        </div>
                        <div className="item">
                            <div className="corpo-menu-item">
                                <img className="menu-item" src="/img/menu-item.png" alt="item-foto"/>
                            </div>
                            <div className="dados-item">
                                <img className="img-item" src="/img/f1.png" alt="cliente-foto"/>
                                <h1 className="nome-item"> Beatriz Souza </h1>
                                <h1 className="status-item"> Ativo </h1>
                            </div>
                        </div>
                        <div className="item">
                            <div className="corpo-menu-item">
                                <img className="menu-item" src="/img/menu-item.png" alt="cliente-foto"/>
                            </div>
                            <div className="dados-item">
                                <img className="img-item" src="/img/f1.png" alt="cliente-foto"/>
                                <h1 className="nome-item"> Beatriz Souza </h1>
                                <h1 className="status-item"> Ativo </h1>
                            </div>
                        </div>

                    </div>



                </section>
            </div>
        </div>
    );

}

export default Home;