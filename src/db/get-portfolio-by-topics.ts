import { gql } from "@apollo/client";

export const GET_PORTFOLIO_BY_TOPICS = gql`
  query GetPortfolioByTopics($topic: [String!]!) {
    portfoliosConnection(
      where: { topics_contains_some: $topic }
      orderBy: updatedAt_DESC
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          updatedAt
          createdAt
          name
          topics
          htmlUrl
          description
          id
          homePage
          banner {
            url
          }
        }
      }
    }
  }
`;
