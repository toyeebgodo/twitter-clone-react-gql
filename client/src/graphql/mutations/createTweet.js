import { gql } from 'react-apollo';

export default gql`
{
mutation createTweet($text: String!){
  createTweet(text: $text) {
    _id
    text
    user {
      username
      firstName
      lastName
      email
      avatar
    }
  }
}


}
`;
