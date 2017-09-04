import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import CreateTweet from './CreateTweet/CreateTweet';
import TweetFeed from './TweetFeed/TweetFeed';
import UserInfo from './UserInfo/UserInfo';
import logo from '../assets/logo.jpg';
import banner from '../assets/banner.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="twitter-page-container">
          <div className="left-block">
            <UserInfo
              avatar={logo}
              fullname="Arlindo Torres"
              username="@Torrescsgo"
              banner={banner}
            />
          </div>
          <div className="twitter-feed-container">
            <CreateTweet logo={logo} />
            <TweetFeed />
          </div>
          <div className="right-block">
            <h3>Quem seguir</h3>
            <span className="right-block-links">
              {' '}
              · <a href>Atualizar</a> · <a href>Ver todos</a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
