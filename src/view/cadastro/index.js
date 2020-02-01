import React, { Component } from 'react';
import './style.css';
import firebase from '../../config/firebase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { spinner } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';


function cadastrar() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;


    firebase.auth().createUserWithEmailAndPassword(email, senha).then(resultado => {

        document.getElementById("email").style.color = "#CCCC";
        document.getElementById("senha").style.color = "#CCCC";
        document.getElementById("msg-erro").style.color = "green";
        document.getElementById("msg-erro").innerText = "Criando sua nova conta, Aguarde...";
        document.getElementById("email").disabled = true;
        document.getElementById("senha").disabled = true;
        document.getElementById("btn-cadastrar").innerText = "";
        document.getElementById("btn-cadastrar").innerHTML = '<p id="spinner" className=""></p>';
        document.getElementById("spinner").classList.add("spinner");

        
        /* Contagem de 3s para redirecionar */
        var valor_min = 20;
        var valor_max = 40;
        setTimeout(function () {
            verifica_abertura(valor_min, valor_max);
        }, 3000);

        function verifica_abertura(valor_min, valor_max) {
            window.location.href = "/";
        }


    }).catch(erro => {

        /* Se Email e Senha estiverem vazios, senha fraca ou Já ter cadastro mostra o erro. */
        if (!email || !senha) {
            document.getElementById("msg-erro").innerText = "Preencha todos os campos.";
        } else {

            switch (erro.message) {
                case 'Password should be at least 6 characters':
                    document.getElementById("senha").style.color = "red";
                    document.getElementById("msg-erro").innerText = "A senha deve ter pelo menos 6 caracteres.";
                    break;

                case 'The email address is already in use by another account.':
                    document.getElementById("email").style.color = "red";
                    document.getElementById("msg-erro").innerText = "O endereço de email já está sendo usado por outra conta";
                    break;

                case 'The email address is badly formatted.':
                    document.getElementById("email").style.color = "red";
                    document.getElementById("msg-erro").innerText = "O endereço de email está mal formatado.";
                    break;

                default:
                    break;
            }
        }
    });
}

function mudou() {
    document.getElementById("email").style.color = "#223D53";
    document.getElementById("senha").style.color = "#223D53";
    document.getElementById("msg-erro").innerText = "";
}

class login extends Component {

    render() {

        return (

            <div className="cadastro">
                <section className="container">


                    <div className="corpo">
                        <div className="l-esquerdo">
                            <div className="titulo">
                                <div className="titulo-l-direito">
                                    Olá!<br />
                                    <b>Bom dia!</b>
                                </div>
                                <img className="img-logo" src="/static/img-logo.png" />
                            </div>
                            <h1 className="sub-titulo-login"> <b>Insira </b>seus dados <FontAwesomeIcon icon="spinner" /> </h1>
                            <form className="formulario-login">
                                <div className="form__group field">
                                    <input onClick={mudou} id="email" type="input" className="form__field" placeholder="Name" required />
                                    <label className="form__label">Email</label>
                                </div>
                                <div className="form__group field">
                                    <input onClick={mudou} id="senha" type="password" className="form__field" placeholder="Name" required />
                                    <label className="form__label">Senha</label>
                                    <small id="aviso_senha" className="aviso_senha"> Sua senha deve ter no mínimo 6 caracteres. </small>
                                </div>
                                <span id="msg-erro" className="msg-erro"> </span>
                            </form>
                            <button onClick={cadastrar} id="btn-cadastrar" className="btn-login ">Cadastrar</button>
                            <Link to="/"><button className="btn-cadastro">Já tenho conta</button></Link>
                        </div>


                        <div className="l-direito">
                            <img className="img-login" src="/static/img-login.png" />
                            <h3 className="texto-l-esquerdo">Faça login com sua conta e aproveite.</h3>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default login;