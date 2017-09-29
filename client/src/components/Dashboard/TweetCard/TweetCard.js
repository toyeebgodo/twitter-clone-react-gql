import React, { Component } from 'react';
import './TweetCard.css';
import {
  ActionList,
  ActionItem,
  ReplyIcon,
  RetweetIcon,
  LikeIcon,
  Reply,
  Retweet,
  Like,
  FlexColumn,
} from './Icons';

class TweetCard extends Component {
  render() {
    return (
      <div className="tweet-container">
        <div className="tweet">
          <img
            className="tweet-avatar"
            src={this.props.avatar}
            alt={this.props.fullname}
          />
          <FlexColumn>
            <div className="tweet-info-container">
              <div className="tweet-user-info">
                <a className="tweet-fullname">{this.props.fullname}</a>
                <span className="tweet-username">{this.props.username}</span>
                <span className="tweet-time">{this.props.time}</span>
              </div>
              <div className="text-container">{this.props.text}</div>
            </div>
            <ActionList>
              {/*
              Reply icon
            */}
              <ActionItem>
                <Reply>
                  <ReplyIcon />
                  <span>7</span>
                </Reply>
              </ActionItem>
              {/*
                Retweet icon
              */}
              <ActionItem>
                <Retweet>
                  <RetweetIcon />
                  <span>10</span>
                </Retweet>
              </ActionItem>
              {/* 
                Like icon
              */}
              <ActionItem>
                <Like>
                  <LikeIcon />
                  <span>250</span>
                </Like>
              </ActionItem>
            </ActionList>
          </FlexColumn>
        </div>
      </div>
    );
  }
}

export default TweetCard;
