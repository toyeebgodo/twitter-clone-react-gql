import { gql } from 'react-apollo';

export default gql`
  mutation signup(
    $email: String!
    $fullName: String!
    $username: String!
    $password: String!
    $avatar: String
  ) {
    signup(
      email: $email
      fullName: $fullName
      username: $username
      password: $password
      avatar: $avatar
    ) {
      token
    }
  }
`;
