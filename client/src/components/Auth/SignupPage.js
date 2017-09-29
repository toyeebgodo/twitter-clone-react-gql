import React, { Component } from "react";
import "./Auth.css";
import {
  Background,
  Container,
  FormContainer,
  Title,
  Field,
  Navbar
} from "./Shared";
import { Link, Redirect } from "react-router-dom";
import { graphql, compose } from "react-apollo";
import SIGNUP_MUTATION from "../../graphql/mutations/signup";
import { connect } from "react-redux";
import { login } from "../../actions/users";

class SignupPage extends Component {
  state = {
    fullName: "",
    email: "",
    username: "",
    password: "",
    loading: false,
    redirect: false
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSignup = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    const { email, password, username, fullName } = this.state;
    const avatar = "https://i.imgur.com/TnKzsGu.jpg";

    try {
      const { data } = await this.props.mutate({
        variables: {
          email,
          username,
          password,
          fullName,
          avatar
        }
      });
      console.log("@signup/data", data);
      let { token } = data.signup;
      localStorage.setItem("token", token);
      this.props.login();

      this.setState({ loading: false, redirect: true });
    } catch (error) {
      this.setState({ loading: false });
      throw error;
    }
  };

  render() {
    const { redirect } = this.state;

    return (
      <div>
        <Background>
          <Navbar loading={this.state.loading} />
          <Container>
            <FormContainer>
              <form onSubmit={this.onSignup}>
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
                  disabled={this.state.loading}
                  onClick={this.onSignup}
                  className="ui big button blue gradb"
                >
                  Inscreva-se
                </button>

                <div className="form-helper">
                  <p>
                    Já tem conta no Twitter?{" "}
                    <Link to="/login"> Entre agora »</Link>
                  </p>
                </div>
              </form>
            </FormContainer>
          </Container>
        </Background>
        {redirect && <Redirect to="/" />}
      </div>
    );
  }
}

export default compose(graphql(SIGNUP_MUTATION), connect(undefined, { login }))(
  SignupPage
);
