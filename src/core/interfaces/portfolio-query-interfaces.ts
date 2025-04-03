import { IPageInfo } from "./page-info";

export interface IPortfolioNode {
  updatedAt: string;
  createdAt: string;
  name: string;
  topics: Array<string>;
  htmlUrl: string;
  description: string;
  id: string;
  homePage: string | null;
  banner?: {
    url: string;
  };
}

export interface IPortfolioEdges {
  node: IPortfolioNode;
}

export interface IPortfolioConnection {
  pageInfo: IPageInfo;
  edges: Array<IPortfolioEdges>;
}

export interface IPortfoliosConnection {
  portfoliosConnection: IPortfolioConnection;
}
