import { IPageInfo } from "./page-info";

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

export interface IPostNode extends IPost {
  author: IAuthorName;
}

export interface IAllPostData extends IPost, IAllAuthorData {
  date: string;
  videoUrl?: string;
  text: {
    html: string;
  };
}

export interface ICurrentlyPost {
  post: IAllPostData;
}

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
