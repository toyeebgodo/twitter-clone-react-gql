import React, { Component } from 'react';
import './Auth.css';
import { Navbar } from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  render() {
    return (
      <div className="ui container notfound-page">
        <Navbar />
        <div className="notfound-container">
          <h1 className="notfound-title">
            Desculpa, mas esta página não está disponível
          </h1>
          <p className="notfound-description">
            A ligação que seguiste pode estar a funcionar incorretamente ou a
            página pode ter sido eliminada.{' '}
            <Link to="/">Regressa ao Twitter.</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default NotFound;
