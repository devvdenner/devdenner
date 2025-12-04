import { HomeViewProps } from '../models/HomeView.model';

export const useHomeViewModel = (props: HomeViewProps) => {
  return {
    ...props,
  };
};
