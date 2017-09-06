import React, { Component } from 'react';
import './SignupPage.css';
import styled from 'styled-components';

const Background = styled.div`
  background: #fff;
  height: 100vh;
  display: flex;
`;
const Title = styled.h1`font-size: 28px;`;

const SignupContainer = styled.div`
  justify-content: center;
  width: 392px;
  padding: 30px 0;
  margin: 0 auto;
  margin-bottom: 25px;
  margin-top: 10px;
  padding-top: 20px;
`;
const Container = styled.div`
  margin-top: 100px;
  padding-top: 20px;
  flex: 1;
  width: 500px;
  border: 0;
  justify-content: center;
`;
const Field = styled.div`padding-bottom: 25px;`;

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
        <div
          className="ui fixed borderless menu gradient"
          style={{ height: 47 }}
        >
          <div className="ui container">
            <i
              className="fa fa-twitter white fa-2x"
              style={{ color: '#fff' }}
              aria-hidden="true"
            />
          </div>
        </div>
        <Container>
          <SignupContainer>
            <Title>Participe hoje no Twitter.</Title>
            <Field>
              <input
                className="signup-input"
                onChange={this.onChange}
                value={this.state.fullname}
                name="fullname"
                maxLength="20"
                placeholder="Nome completo"
              />
            </Field>
            <Field>
              <input
                className="signup-input"
                onChange={this.onChange}
                value={this.state.username}
                name="username"
                placeholder="Username"
              />
            </Field>
            <Field>
              <input
                className="signup-input"
                onChange={this.onChange}
                value={this.state.email}
                name="email"
                placeholder="E-mail"
              />
            </Field>
            <Field>
              <input
                className="signup-input"
                onChange={this.onChange}
                value={this.state.password}
                name="password"
                type="password"
                placeholder="Senha"
              />
            </Field>
            <button className="ui big button blue">Inscreva-se</button>
          </SignupContainer>
        </Container>
      </Background>
    );
  }
}

export default SignupPage;
