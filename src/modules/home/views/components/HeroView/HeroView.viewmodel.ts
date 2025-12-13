import { HeroViewProps } from './HeroView.model';
import { heroStyles } from './HeroView.styles';

export const getHeroViewViewModel = async (props: HeroViewProps) => {
  const { profile } = props;

  return {
    profile,
    styles: heroStyles,
  };
};
