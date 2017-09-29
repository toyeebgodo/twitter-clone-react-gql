import React from "react";
import "./CreateTweet.css";
import classNames from "classnames";
import { graphql } from "react-apollo";
import CREATE_TWEET_MUTATION from "../../../graphql/mutations/createTweet";

class CreateTweet extends React.Component {
  state = {
    text: "",
    onFocus: false,
    loading: false
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
    if (e.target.value === "") this.setState({ onFocus: false });
  };

  onTweet = async () => {
    this.setState({ loading: true });

    const { text } = this.state;

    try {
      // TODO: Implement Optimistic UI, (after tweet created don't refresh page, just change store state)
      const { data } = await this.props.mutate({
        variables: {
          text
        }
      });

      this.setState({ loading: false });
      window.location.reload();
    } catch (error) {
      this.setState({ loading: false });
      throw error;
    }
  };
  render() {
    const charClass = classNames({
      counter: true,
      redtext: this.state.text.length > 140
    });

    const buttonClass = classNames({
      ui: true,
      small: true,
      button: true,
      blue: true,
      disabled: this.state.text.length > 140 || this.state.text.length === 0
    });

    const { logo } = this.props;

    if (!this.state.onFocus)
      return (
        <div>
          <div className="create-tweet-container small">
            <div className="logo-text-container small">
              <img className="avatar32" alt="Torres" src={logo} />
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
                <button
                  className={buttonClass}
                  style={{ borderRadius: 25 }}
                  onClick={this.onTweet}
                >
                  Tweetar
                </button>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default graphql(CREATE_TWEET_MUTATION)(CreateTweet);
