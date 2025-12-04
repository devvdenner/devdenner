import { HeroViewProps } from './HeroView.model';
import { heroStyles } from './HeroView.styles';

export const useHeroViewViewModel = (props: HeroViewProps) => {
  const { profile } = props;

  return {
    profile,
    styles: heroStyles,
  };
};
