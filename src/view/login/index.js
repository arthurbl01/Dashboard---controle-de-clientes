import React, { useState } from 'react';
import './style.css';
import { Link, Redirect } from 'react-router-dom';
import firebase from '../../config/firebase';
import 'firebase/auth';
import { spinner } from '@fortawesome/free-solid-svg-icons';



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
            setTimeout(() =>{
                dispatch({type: 'LOG_IN', usuarioEmail: email})       
            },3000);    
           
            
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
            {useSelector(state => state.usuarioLogado) == 1 ? <Redirect to='/painel' /> : null}
            <section className="container">
                <div className="corpo">
                    <div className="l-esquerdo">
                        <img className="img-login" src="/img/img-login.png" alt="img-logo-cadastro"/>
                        <h3 className="texto-l-esquerdo">Faça login com sua conta e aproveite.</h3>
                    </div>

                    <div className="l-direito">

                        <div className="titulo">
                            <div className="titulo-l-direito">
                                Olá!<br />
                                <b>Bom dia!</b>
                            </div>
                            <img className="img-logo" src="/img/img-logo.png" alt="img-clientes-cadastro" />
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

                        <button className="btn-esq-senha"><Link className="btn-esq-senha" to='/recuperar-senha'> Esqueceu sua senha? </Link></button>
                        <button onClick={logar} id="btn-login" className="btn-login"> Login </button>
                        <button className="btn-cadastro"><Link className="btn-cadastro" to='/cadastro'>Novo usuário</Link></button>
                    </div>
                </div>
            </section>
        </div>
    );

}


export default Login;


