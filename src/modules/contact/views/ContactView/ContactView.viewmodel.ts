import { ContactViewProps } from './ContactView.model';

export const useContactViewModel = (props: ContactViewProps) => {
  return {
    ...props,
  };
};
