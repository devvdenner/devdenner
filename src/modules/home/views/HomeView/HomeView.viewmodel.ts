import { HomeViewProps } from './HomeView.model';

export const useHomeViewModel = (props: HomeViewProps) => {
  return {
    ...props,
  };
};
