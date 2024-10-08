import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import "@radix-ui/themes/styles.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "utils/blogApi.ts";
import { SearchPostByTitleProvider } from "@contexts/searchPostByTitleContext.tsx";
import { FilterPostsProvider } from "@contexts/filterPostsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <SearchPostByTitleProvider>
        <FilterPostsProvider>
          <App />
        </FilterPostsProvider>
      </SearchPostByTitleProvider>
    </ApolloProvider>
  </StrictMode>
);
