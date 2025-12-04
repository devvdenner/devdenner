import { ContactViewProps } from '../models/ContactView.model';

export const useContactViewModel = (props: ContactViewProps) => {
  return {
    ...props,
  };
};
