export type ProjectType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export interface IProjectState {
  loading: boolean;
  projects: ProjectType[];
  projectDetails: ProjectType | null;
  error: null | string;
}
