import { gql } from "@apollo/client";

export const GET_FILTERS_QUERY = gql`
  {
    filters {
      id
      title
    }
  }
`;
