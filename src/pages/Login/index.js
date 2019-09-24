import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { LoginContainer, LoginButton } from './styles';

import logo from '../../assets/logo.jpg';

export default class Login extends Component {
  handleLogin = async e => {
    e.preventDefault();
    const loginpath = `/home`;
    this.props.history.push(loginpath);
  };

  render() {
    return (
      <>
        <LoginContainer>
          <form>
            <img src={logo} alt="SafetyBBSLogo" />
            <span>Login</span>
            <input type="email" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <Link to="/forgotpassword">Esqueci minha senha</Link>
            <LoginButton type="submit" onClick={this.handleLogin}>
              Entrar
            </LoginButton>
          </form>
        </LoginContainer>
      </>
    );
  }
}
