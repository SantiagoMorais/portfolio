import { gql } from "@apollo/client";

export const GET_FILTERED_POSTS_QUERY = gql`
  query GetFilteredPosts($filter: String!, $after: String, $first: Int!) {
    postsConnection(
      where: { filter_some: { title_contains: $filter } }
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
