import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export const Navbar = props => {
  return (
    <div className="ui fixed borderless menu" style={{ height: 47 }}>
      <div className="ui container">
        <a href="/" className="ui item isactive">
          <i className="fa fa-list" aria-hidden="true" />
          <span className="item-text isactive">Página Inicial</span>
        </a>
        <a href="/" className="ui item">
          <i className="fa fa-bell-o" aria-hidden="true" />
          <span className="item-text">Notificações</span>
        </a>
        <a href="/" className="ui item">
          <i className="fa fa-envelope-o" aria-hidden="true" />
          <span className="item-text">Mensagens</span>
        </a>
        {props.loading ? (
          <i className="spinner" />
        ) : (
          <Link to="/">
            <i className="fa fa-twitter fa-2x" aria-hidden="true" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
