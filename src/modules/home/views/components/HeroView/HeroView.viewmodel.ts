import { HeroViewProps } from './HeroView.model';
import { heroStyles } from './HeroView.styles';

export const useHeroViewViewModel = (props: HeroViewProps) => {
  return {
    profile: props.profile,
    styles: heroStyles,
  };
};
