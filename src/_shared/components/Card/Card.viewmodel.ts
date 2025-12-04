import { ICardModel } from './Card.model';

export const useCardViewModel = (props: ICardModel) => {
  return { ...props };
};
