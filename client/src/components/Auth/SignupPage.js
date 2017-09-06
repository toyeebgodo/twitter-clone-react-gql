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

class SignupPage extends Component {
  state = {
    fullname: '',
    email: '',
    username: '',
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
            <Title>Participe hoje no Twitter.</Title>
            <Field>
              <input
                className="field-input"
                onChange={this.onChange}
                value={this.state.fullname}
                name="fullname"
                maxLength="20"
                placeholder="Nome completo"
              />
            </Field>
            <Field>
              <input
                className="field-input"
                onChange={this.onChange}
                value={this.state.username}
                name="username"
                placeholder="Nome de utilizador"
              />
            </Field>
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
                placeholder="Palavra-passe"
              />
            </Field>
            <button className="ui big button blue gradb">Inscreva-se</button>
            <div className="form-helper">
              <p>
                Já tem conta no Twitter? <Link to="/login"> Entre agora »</Link>
              </p>
            </div>
          </FormContainer>
        </Container>
      </Background>
    );
  }
}

export default SignupPage;
