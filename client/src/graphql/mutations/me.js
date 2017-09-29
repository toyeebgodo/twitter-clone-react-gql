import { gql } from "react-apollo";

export default gql`
  {
    me {
      username
      fullName
      avatar
    }
  }
`;
