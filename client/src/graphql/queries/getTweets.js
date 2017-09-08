import { gql } from 'react-apollo';

export default gql`
  {
    getTweets {
      _id
      text
      createdAt
      favouriteCount
      user {
        username
        avatar
        fullName
      }
    }
  }
`;
