import React, { Component } from 'react';
import './Tweet.css';

class Tweet extends Component {
  render() {
    return (
      <div className="tweet-container">
        <div className="tweet">
          <img
            className="tw-avatar"
            src={this.props.avatar}
            alt={this.props.fullname}
          />
          <div className="tweet-info-container">
            <div className="user-info">
              <a strong className="fullname">
                {this.props.fullname}
              </a>
              <span className="username">{this.props.username}</span>
              <span className="time">{this.props.time}</span>
            </div>
            <div className="text-container">{this.props.text}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tweet;
