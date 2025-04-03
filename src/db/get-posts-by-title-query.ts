import { gql } from "@apollo/client";

export const GET_POSTS_BY_TITLE_QUERY = gql`
  query GetPostsByTitle($title: String!, $after: String, $first: Int!) {
    postsConnection(
      where: { title_contains: $title }
      after: $after
      first: $first
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          title
          subtitle
          image {
            url
          }
          author {
            name
          }
        }
      }
    }
  }
`;
