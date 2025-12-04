import { ProjectsViewProps } from '../models/ProjectsView.model';

export const useProjectsViewModel = (props: ProjectsViewProps) => {
  return {
    ...props,
  };
};
