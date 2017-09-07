import React from 'react';
import './UserStats.css';

class UserStats extends React.Component {
  render() {
    return (
      <div>
        <div className="UserStats">
          <img className="user-banner" src={this.props.banner} alt="banner" />
          <div className="userinfo-container">
            <img
              className="user-avatar"
              src={this.props.avatar}
              alt={this.props.fullname}
            />
            <div className="usertext-container">
              <a href className="user-fullname">
                {this.props.fullname}
              </a>
              <span className="user-username">{this.props.username}</span>
            </div>
          </div>
          <div className="all-stats">
            <div className="stats-container">
              <span className="stats-title">Tweets</span>
              <span className="stats-number">1</span>
            </div>
            <div className="stats-container">
              <span className="stats-title">Seguindo</span>
              <span className="stats-number">123</span>
            </div>
            <div className="stats-container">
              <span className="stats-title">Seguidores</span>
              <span className="stats-number">1337</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserStats;
