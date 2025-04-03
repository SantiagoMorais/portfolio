import { gql } from "@apollo/client";

export const GET_CURRENTLY_POST_QUERY = gql`
  query GetCurrentlyPostQuery($id: ID!) {
    post(where: { id: $id }) {
      id
      title
      subtitle
      date
      image {
        url
      }
      videoUrl
      text {
        html
      }
      author {
        name
        description
        avatar {
          url
        }
        linkedin
        github
      }
    }
  }
`;
