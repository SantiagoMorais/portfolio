import { env } from "@/env";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: env.VITE_HYGRAPH_API_URL,
    headers: {
      Authorization: `Bearer ${env.VITE_HYGRAPH_API_TOKEN}`,
    },
  }),
});
