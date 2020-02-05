import React, { Component } from 'react';
import './style.css';
import firebase from '../../config/firebase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { spinner } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


function usuarioRecuperarSenha() {
    const email = document.getElementById('email').value;

    firebase.auth().sendPasswordResetEmail(email).then(resultado => {
        document.getElementById("email").style.color = "#CCCC";
        document.getElementById("msg-erro").style.color = "green";
        document.getElementById("msg-erro").innerText = "Enviamos um link no seu email para cadastrar uma nova senha.";
        document.getElementById("email").disabled = true;
        document.getElementById("btn-cadastrar").innerText = "";
        document.getElementById("btn-cadastrar").innerHTML = '<p id="spinner" className=""></p>';
        document.getElementById("spinner").classList.add("spinner");

        /* Contagem de 3s para redirecionar  */
        setTimeout(() => {
            window.location.assign('/');
        }, 3000);

    }).catch(erro => {

        if (!email) {
            document.getElementById("msg-erro").innerText = "Preencha todos os campos.";
        } else {
            alert(erro);
            switch (erro.message) {
                case 'Password should be at least 6 characters':
                    document.getElementById("msg-erro").innerText = "A senha deve ter pelo menos 6 caracteres.";
                    break;

                case 'There is no user record corresponding to this identifier. The user may have been deleted.':
                    document.getElementById("email").style.color = "red";
                    document.getElementById("msg-erro").innerText = "Não há registro de usuário correspondente a esse identificador. O usuário pode ter sido excluído.";
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
    document.getElementById("msg-erro").innerText = "";
}

class recuperarSenha extends Component {

    render() {

        return (

            <div className="cadastro">
                <section className="container">


                    <div className="corpo">


                        <div className="l-esquerdo">

                            <div className="titulo">
                                <div className="titulo-l-direito">
                                    Recuperar<br />
                                    <b>Senha</b>
                                </div>
                                <img className="img-logo" src="/img/img-logo.png" alt="img-logo-cadastro" />
                            </div>

                            <h1 className="sub-titulo-login"> <b>Insira </b>seu E-mail <FontAwesomeIcon icon="spinner" /> </h1>

                            <form className="formulario-login">
                                <div className="form__group field">
                                    <input onClick={mudou} id="email" type="input" className="form__field" placeholder="Name" required />
                                    <label className="form__label">Email</label>
                                    
                                </div>
                                <span id="msg-erro" className="msg-erro"> </span>
                            </form>

                            <button onClick={usuarioRecuperarSenha} id="btn-cadastrar" className="btn-login ">Recuperar</button>
                            <Link to="/"><button className="btn-cadastro">Voltar</button></Link>

                        </div>

                        <div className="l-direito">
                            <img className="img-login" src="/img/img-login.png" alt="img-clientes-cadastro" />
                            <h3 className="texto-l-esquerdo">Faça login com sua conta e aproveite.</h3>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default recuperarSenha;