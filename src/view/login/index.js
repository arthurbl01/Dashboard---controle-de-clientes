import React, { useState } from 'react';
import './style.css';
import { Link, Redirect } from 'react-router-dom';

import firebase from '../../config/firebase';
import 'firebase/auth';

import { useSelector, useDispatch} from 'react-redux';



function Login(){
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    const dispatch = useDispatch();
   


    function logar(){
        document.getElementById("btn-login").innerText = "";
        document.getElementById("btn-login").innerHTML = '<p id="spinner" className=""></p>';
        document.getElementById("spinner").classList.add("spinner");
        
        firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
            
 
            document.getElementById("msg-erro").style.color = "green";
            document.getElementById("email").style.color = "#CCCC";
            document.getElementById("senha").style.color = "#CCCC";
            document.getElementById("msg-erro").innerText = "Entrando...";
            document.getElementById("email").disabled = true;
            document.getElementById("senha").disabled = true;

          /* Contagem de 3s para redirecionar  */
            var valor_min = 20;
            var valor_max = 40;
            setTimeout( () => {
                verifica_abertura(valor_min, valor_max);
                dispatch({type: 'LOG_IN', usuarioEmail: email});
            }, 3000);

            function verifica_abertura(valor_min, valor_max) {
                 window.location.href = "/painel";
            }
           
            
        }).catch(erro => {
            document.getElementById("btn-login").innerHTML = '';
            document.getElementById("btn-login").innerText = "Login";
            /* Se Email e Senha estiverem vazios, senha fraca ou Já ter cadastro mostra o erro. */
            if (!email || !senha) {
                document.getElementById("msg-erro").innerText = "Preencha todos os campos.";
            } else {

                switch (erro.message) {
                    case 'The password is invalid or the user does not have a password.':
                        document.getElementById("senha").style.color = "red";
                        document.getElementById("msg-erro").innerText = "A senha é inválida ou o usuário não possui uma senha.";
                        break;

                    case 'The email address is already in use by another account.':
                        document.getElementById("email").style.color = "red";
                        document.getElementById("msg-erro").innerText = "O endereço de email já está sendo usado por outra conta";
                        break;

                    case 'The email address is badly formatted.':
                        document.getElementById("email").style.color = "red";
                        document.getElementById("msg-erro").innerText = "O endereço de email está mal formatado.";
                        break;

                    case 'There is no user record corresponding to this identifier. The user may have been deleted.':
                        document.getElementById("email").style.color = "red";
                        document.getElementById("msg-erro").innerText = "Não há registro de usuário correspondente a esse identificador. O usuário pode ter sido excluído.";
                        break;

                    default:
                        break;
                }
            }
        });

        
    }
    
    return (
        <div className="login">
            {useSelector(state => state.usuarioLogado) > 0 ? <Redirect to='/painel' /> : null}
            <section className="container">
                <div className="corpo">
                    <div className="l-esquerdo">
                        <img className="img-login" src="/static/img-login.png" />
                        <h3 className="texto-l-esquerdo">Faça login com sua conta e aproveite.</h3>
                    </div>

                    <div className="l-direito">

                        <div className="titulo">
                            <div className="titulo-l-direito">
                                Olá!<br />
                                <b>Bom dia!</b>
                            </div>
                            <img className="img-logo" src="/static/img-logo.png" />
                        </div>

                        <h1 className="sub-titulo-login"> <b>Entre </b>com sua conta</h1>

                        <form className="formulario-login">
                            <div className="form__group field">
                                <input onChange={(e) => setEmail(e.target.value)} id="email" type="email" className="form__field" placeholder="Name" required />
                                <label className="form__label">Email</label>
                            </div>
                            <div className="form__group field">
                                <input onChange={(e) => setSenha(e.target.value)} id="senha" type="password" className="form__field" placeholder="Name" required />
                                <label className="form__label">Senha</label>
                            </div>

                            <span id="msg-erro" className="msg-erro"> </span>
                        </form>

                        <button className="btn-esq-senha"> Esqueceu sua senha? </button>
                        <button onClick={logar} id="btn-login" className="btn-login"> Login </button>
                        <Link to='/cadastro'><button className="btn-cadastro">Novo usuário</button></Link>
                    </div>
                </div>
            </section>
        </div>
    );

}

export default Login;