import { IPageInfo } from "./page-info";

export interface IPortfolioNode {
  updatedAt: string;
  createdAt: string;
  name: string;
  topics: Array<string>;
  htmlUrl: string;
  description: string;
  id: string;
  homePage: string;
  banner: {
    url: string;
  };
}

export interface IPortfolioEdges {
  edges: {
    node: Array<IPortfolioNode>;
  };
}

export interface IPostsConnection {
  pageInfo: IPageInfo;
  edges: Array<IPortfolioEdges>;
}
