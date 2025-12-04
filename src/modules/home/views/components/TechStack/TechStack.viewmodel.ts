import { TechStackProps } from './TechStack.model';
import { techStackStyles } from './TechStack.styles';

export const useTechStackViewModel = (props: TechStackProps) => {
  const { technologies } = props;

  return {
    technologies,
    styles: techStackStyles,
  };
};
