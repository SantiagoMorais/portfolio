export interface IProjectsListProps {
  data: {
    banner: string;
    description: string;
    homepage: string;
    html_url: string;
    id: number;
    name: string;
    topics: string[];
  }[];
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
