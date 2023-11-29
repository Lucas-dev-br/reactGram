import React from 'react'
import './Auth.css'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div id="login">
      <h2>ReactGram</h2>
      <p className="subtitle">Faça o login para ver o que há de novo.</p>
      <form >
        <input
          type="text"
          placeholder="E-mail"
  
        />
        <input
          type="password"
          placeholder="Senha"
         
        />

<input type="submit" value="Entrar" />
       
      </form>
      <p>
        Não tem uma conta? <Link to="/register">Clique aqui</Link>
      </p>
    </div>
  );
}

export default Login