export interface IResumesQuery {
  resumes: Array<{
    title: string;
    document: {
      url: string;
    };
  }>;
}
