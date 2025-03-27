import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";
import { env } from "env";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: env.VITE_HYGRAPH_API_URL,
    headers: {
      Authorization: `Bearer ${env.VITE_HYGRAPH_API_TOKEN}`,
    },
  }),
});

export const GET_POSTS_QUERY = gql`
  query GetPostsQuery($after: String, $first: Int!) {
    postsConnection(after: $after, first: $first) {
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

export const GET_FILTERS_QUERY = gql`
  {
    filters {
      id
      title
    }
  }
`;

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

export const GET_CERTIFICATES_QUERY = gql`
  query GetCertificatesQuery($after: String, $first: Int!) {
    certificatesConnection(after: $after, first: $first) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          title
          description
          courseDuration
          dateConclusion
          certificateFile {
            url
          }
          image {
            url
          }
        }
      }
    }
  }
`;
