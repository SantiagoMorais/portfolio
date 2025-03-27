export interface IGithubRepos {
  banner: string;
  description: string;
  homepage: string;
  html_url: string;
  id: number;
  name: string;
  topics: string[];
}

export type ProjectProps = {
  project: {
    banner: string;
    description: string;
    homepage: string;
    html_url: string;
    id: number;
    name: string;
    topics: string[];
  };
};

// QUERY_INTERFACES

export interface IAuthorName {
  name: string;
}

export interface IAuthorInfo extends IAuthorName {
  description: string;
  avatar: {
    url: string;
  };
  linkedin?: string;
  github?: string;
}

export interface IAllAuthorData {
  author: IAuthorInfo;
}

export interface IPost {
  id: string;
  title: string;
  subtitle?: string;
  image: {
    url: string;
  };
}

export interface IShortPostData extends IPost {
  author: IAuthorName;
}

export interface IAllPostData extends IPost, IAllAuthorData {
  date: string;
  videoUrl?: string;
  text: {
    html: string;
  };
}

export interface IPageInfo {
  hasNextPage: boolean;
  endCursor: string;
}

export interface ICurrentlyPost {
  post: IAllPostData;
}

export interface IPostNode extends IShortPostData {}

export interface IPostEdge {
  node: IPostNode;
}

export interface IPostsConnection {
  pageInfo: IPageInfo;
  edges: IPostEdge[];
}

export interface IPostsData {
  postsConnection: IPostsConnection;
}

export interface IPostsFilters {
  filters: {
    id: string;
    title: string;
  }[];
}

// Certificates query types

export interface ICertificateNode {
  id: string;
  title: string;
  description: string;
  courseDuration: string;
  dateConclusion: string;
  certificateFile: {
    url: string
  };
  image: {
    url: string
  };
}

export interface ICertificateEdge {
  node: ICertificateNode;
}

export interface ICertificatesConnection {
  pageInfo: IPageInfo;
  edges: ICertificateEdge[];
}

export interface ICertificatesData {
  certificatesConnection: ICertificatesConnection;
}