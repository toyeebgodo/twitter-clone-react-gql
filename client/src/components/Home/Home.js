import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import CreateTweet from '../TweetCreate/TweetCreate';
import TweetFeed from '../TweetFeed/TweetFeed';
import UserInfo from '../UserStats/UserStats';
import logo from '../../assets/logo.jpg';
import banner from '../../assets/banner.jpg';
import './Home.css';
import { graphql } from 'react-apollo';
import GET_TWEETS_QUERY from '../../graphql/queries/getTweets';

class Home extends Component {
  render() {
    const { data } = this.props;

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
            <TweetFeed data={data} />
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

export default graphql(GET_TWEETS_QUERY)(Home);
