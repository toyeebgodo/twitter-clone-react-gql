import React from 'react';
import './CreateTweet.css';
import classNames from 'classnames';

class CreateTweet extends React.Component {
  state = {
    text: '',
    onFocus: false,
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  remainingCharacters = () => {
    return 140 - this.state.text.length;
  };

  onFocus = e => {
    this.setState({ onFocus: true });
  };

  onBlur = e => {
    if (e.target.value === '') this.setState({ onFocus: false });
  };

  render() {
    const charClass = classNames({
      counter: true,
      redtext: this.state.text.length > 140,
    });

    const buttonClass = classNames({
      ui: true,
      small: true,
      button: true,
      blue: true,
      disabled: this.state.text.length > 140 || this.state.text.length === 0,
    });
    if (!this.state.onFocus)
      return (
        <div>
          <div className="create-tweet-container small">
            <div className="logo-text-container small">
              <img className="avatar32" alt="Torres" src={this.props.logo} />
              <textarea
                className="twitter-textarea small"
                cols="60"
                rows="1"
                placeholder="O que está acontecendo?"
                name="text"
                onFocus={this.onFocus}
                value={this.state.text}
                onChange={this.onChange}
              />
            </div>
          </div>
        </div>
      );
    else
      return (
        <div>
          <div className="create-tweet-container">
            <div className="logo-text-container">
              <img className="avatar32" alt="Torres" src={this.props.logo} />
              <textarea
                className="twitter-textarea"
                cols="60"
                rows="4"
                placeholder="O que está acontecendo?"
                name="text"
                value={this.state.text}
                onChange={this.onChange}
                onBlur={this.onBlur}
              />
            </div>

            <div className="actions-container">
              <div className="button-container">
                <span className={charClass} style={{ borderRadius: 25 }}>
                  {this.remainingCharacters()}
                </span>
                <button className={buttonClass} style={{ borderRadius: 25 }}>
                  Tweetar
                </button>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default CreateTweet;
