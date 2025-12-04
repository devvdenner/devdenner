import { AboutViewProps } from '../models/AboutView.model';

export const useAboutViewModel = (props: AboutViewProps) => {
  return {
    ...props,
  };
};
