import React from 'react';
import './TweetFeed.css';
import TweetCard from '../TweetCard/TweetCard';

import zeus from '../../assets/zeus.jpg';
import fallen from '../../assets/fallen.jpg';
import logo from '../../assets/logo.jpg';

import moment from 'moment';
import 'moment/locale/pt';

moment.locale('pt');

class TweetFeed extends React.Component {
  render() {
    const { data } = this.props;
    console.log(data);

    return (
      <div className="twitter-feed">
        {data.networkStatus === 1 || data.error ? (
          <div className="tweet loading">
            <span className="loading-text">A carregar...</span>{' '}
          </div>
        ) : (
          data.getTweets.map(tweet => (
            <TweetCard
              avatar={tweet.user.avatar}
              fullname={tweet.user.firstName + ' ' + tweet.user.lastName}
              username={'@' + tweet.user.username}
              text={tweet.text}
              time={moment(tweet.time).fromNow()}
              key={tweet._id}
            />
          ))
        )}

        <TweetCard
          avatar={logo}
          fullname="Arlindo Torres"
          username="@Torrescsgo"
          time={moment()
            .startOf('hour')
            .fromNow()}
          text="First tweet"
        />

        <TweetCard
          avatar={zeus}
          fullname="Daniil Teslenko"
          username="@ZeusCS_GO"
          time={moment('20170723', 'YYYYMMDD').fromNow()}
          text="I fucking did it. YES!!!!!!!!!!!!! 🏆🏆🏆🏆🏆"
        />

        <TweetCard
          avatar={fallen}
          fullname="Gabriel Toledo"
          username="@FalleNCS"
          time={moment('20170723', 'YYYYMMDD').fromNow()}
          text="Give hobbit the trophy."
        />
      </div>
    );
  }
}

export default TweetFeed;
