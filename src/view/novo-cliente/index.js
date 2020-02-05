import React, {  } from 'react';
import './style.css';
import 'firebase/auth';
import { FaCogs, FaCopy, FaComments, FaUserFriends, FaSignInAlt, FaOutdent } from 'react-icons/fa';


import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

function Home() {
    const dispatch = useDispatch();

    return (
        <div className="dashboard">
            {useSelector(state => state.usuarioLogado) == 0 ? <Redirect to='/' /> : null}
            
            <div className="corpo-menu-vertical">
                <div className="corpo-img-menu-vertical">
                    <FaOutdent className="img-menu-vertical" />
                </div>
                <img className="img-perfil-vertical" src="/img/eu.png" alt="minha-foto" />
                <h1 className="nome-perfil-vertical"> Arthur BL </h1>
                <h1 className="cargo-perfil-vertical"> <>{useSelector(state => state.usuarioEmail)} </> </h1>

                <Link to="/painel" className="item-menu-vertical">
                    <FaCopy className="img-item-menu-vertical" />
                    <h1 className="nome-item-menu-vertical" >Painel de Controle</h1>
                </Link>

                <Link to="/mensagens" className="item-menu-vertical"  >
                    <FaComments className="img-item-menu-vertical"  />
                    <h1 className="nome-item-menu-vertical" >Mensagens</h1>
                </Link>

                <Link to="/clientes" className="item-menu-vertical" id="ativo">
                    <FaUserFriends className="img-item-menu-vertical" id="ativo-icon" />
                    <h1 className="nome-item-menu-vertical" id="ativo-texto">Clientes</h1>
                </Link>

                <Link to="/configuracoes" className="item-menu-vertical">
                    <FaCogs className="img-item-menu-vertical"/>
                    <h1 className="nome-item-menu-vertical">Configurações</h1>
                </Link>

                <Link className="item-menu-vertical-sair" onClick={ () => dispatch(    {type: 'LOG_OUT'}   )}>
                    <FaSignInAlt className="img-item-menu-vertical" />
                    <h1 className="nome-item-menu-vertical">Sair</h1>
                </Link>


            </div>

            <div className="container">


                <section className="menu">
                    <div className="menu-esquerdo">
                        <h1 className="titulo-menu"> Novo Cliente </h1>
                    </div>

                    <div className="menu-direito">
                        <img className="logo-menu" src="/img/logo.png" alt="logo-foto"/>
                    </div>
                    
                </section>


                <section className="">
                    




                </section>
            </div>
        </div>
    );

}

export default Home;