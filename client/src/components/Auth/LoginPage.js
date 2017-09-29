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
import LOGIN_MUTATION from "../../graphql/mutations/login";
import { connect } from "react-redux";
import { login } from "../../actions/users";

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
    loading: false,
    redirect: false
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLogin = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    const { email, password } = this.state;

    try {
      const { data } = await this.props.mutate({
        variables: {
          email,
          password
        }
      });
      localStorage.setItem("token", data.login.token);

      this.props.login();
      this.setState({ loading: false, redirect: true });
    } catch (error) {
      this.setState({ loading: false });
      throw error;
    }
  };

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }

    return (
      <Background>
        <Navbar loading={this.state.loading} />
        <Container>
          <FormContainer>
            <form onSubmit={this.onLogin}>
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
                  placeholder="Palavra-passe"
                />
              </Field>
              <button
                disabled={this.state.loading}
                className="ui big button blue gradb"
              >
                Entrar
              </button>
              <div className="form-helper">
                <p>
                  Novo no Twitter? <Link to="/signup">Inscreva-se agora »</Link>
                </p>
              </div>
            </form>
          </FormContainer>
        </Container>
      </Background>
    );
  }
}

export default compose(graphql(LOGIN_MUTATION), connect(undefined, { login }))(
  LoginPage
);
