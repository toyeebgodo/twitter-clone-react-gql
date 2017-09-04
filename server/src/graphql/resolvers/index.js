import GraphQLDate from 'graphql-date';

import TweetResolvers from './tweet-resolvers';
import UserRevolvers from './user-resolvers';

export default {
  Date: GraphQLDate,
  Query: {
    getTweet: TweetResolvers.getTweet,
    getTweets: TweetResolvers.getTweets,
    me: UserRevolvers.me,
  },
  Mutation: {
    createTweet: TweetResolvers.createTweet,
    updateTweet: TweetResolvers.updateTweet,
    deleteTweet: TweetResolvers.deleteTweet,
    signup: UserRevolvers.signup,
    login: UserRevolvers.login,
  },
};
