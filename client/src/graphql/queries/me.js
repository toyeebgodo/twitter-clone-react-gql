import { gql } from 'react-apollo';

export default gql`
  {
    me {
      avatar
      username
      fullName
    }
  }
`;