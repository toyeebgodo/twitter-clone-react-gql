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
import { graphql } from 'react-apollo';
import SIGNUP_MUTATION from '../../graphql/mutations/signup';
import { Redirect } from 'react-router-dom';

class SignupPage extends Component {
  state = {
    fullName: '',
    email: '',
    username: '',
    password: '',
    redirect: false,
    loading: false,
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSignup = async () => {
    this.setState({ loading: true });

    const { email, password, username, fullName } = this.state;
    const avatar = 'https://i.imgur.com/xUMbFdY.jpg';

    try {
      const { data } = await this.props.mutate({
        variables: {
          email,
          username,
          password,
          fullName,
          avatar,
        },
      });
      localStorage.setItem('token', data.signup.token);
      this.setState({ loading: false });
      this.setState({ redirect: true });
    } catch (error) {
      throw error;
    }

    this.props
      .mutate({
        variables: { email, username, password, fullName, avatar },
      })
      .then(({ data }) => {
        console.log('data.signup.token:', data.signup.token);
        // localstorage token
        this.setState({ redirect: true });
      })
      .catch(error => {
        console.log('there was an error sending the query', error);
      });
  };

  render() {
    return (
      <div>
        {this.state.redirect ? (
          <Redirect to="/" />
        ) : (
          <Background>
            <Navbar />
            <Container>
              <FormContainer>
                <Title>Participe hoje no Twitter.</Title>
                <Field>
                  <input
                    className="field-input"
                    onChange={this.onChange}
                    value={this.state.fullName}
                    name="fullName"
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
                <button
                  onClick={this.onSignup}
                  className="ui big button blue gradb"
                >
                  Inscreva-se
                </button>

                <div className="form-helper">
                  <p>
                    Já tem conta no Twitter?{' '}
                    <Link to="/login"> Entre agora »</Link>
                  </p>
                </div>
              </FormContainer>
            </Container>
          </Background>
        )}{' '}
      </div>
    );
  }
}

export default graphql(SIGNUP_MUTATION)(SignupPage);
