import React, { Component } from 'react';
import './Auth.css';
import {
  Background,
  Container,
  FormContainer,
  Title,
  Field,
  Navbar,
} from './Shared';
import { Link } from 'react-router-dom';

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Background>
        <Navbar />
        <Container>
          <FormContainer>
            <Title>Entrar no Twitter.</Title>
            <Field>
              <input
                className="field-input"
                onChange={this.onChange}
                value={this.state.email}
                name="email"
                placeholder="E-mail"
              />
            </Field>
            <Field>
              <input
                className="field-input"
                onChange={this.onChange}
                value={this.state.password}
                name="password"
                type="password"
                placeholder="Senha"
              />
            </Field>
            <button className="ui big button blue gradb">Entrar</button>
            <div className="form-helper">
              <p>
                Novo no Twitter? <Link to="/signup">Inscreva-se agora »</Link>
              </p>
            </div>
          </FormContainer>
        </Container>
      </Background>
    );
  }
}

export default LoginPage;
