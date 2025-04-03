import { gql } from "@apollo/client";

export const GET_RESUMES_QUERY = gql`
  query GetResumesQuery {
    resumes {
      title
      document {
        url
      }
    }
  }
`;
