import React from 'react';
import './TweetFeed.css';
import Tweet from '../Tweet/Tweet';
import zeus from '../../assets/zeus.jpg';
import fallen from '../../assets/fallen.jpg';
import logo from '../../assets/logo.jpg';

const TweetFeed = () => {
  return (
    <div className="twitter-feed">
      <Tweet
        avatar={logo}
        fullname="Arlindo Torres"
        username="@Torrescsgo"
        time="2 min"
        text="First tweet"
      />

      <Tweet
        avatar={zeus}
        fullname="Daniil Teslenko"
        username="@ZeusCS_GO"
        time="23 de jul"
        text="I fucking did it. YES!!!!!!!!!!!!! 🏆🏆🏆🏆🏆"
      />

      <Tweet
        avatar={fallen}
        fullname="Gabriel Toledo"
        username="@FalleNCS"
        time="23 de jul"
        text="Give hobbit the trophy."
      />
    </div>
  );
};

export default TweetFeed;
