import { cn } from '@/_shared/utils/cn';

import { ICardModel } from './Card.model';
import { cardVariants } from './Card.styles';
import { useCardViewModel } from './Card.viewmodel';

export const Card = (props: ICardModel) => {
  const { className, children, ...rest } = useCardViewModel(props);

  return (
    <div className={cn(cardVariants(), className)} {...rest}>
      {children}
    </div>
  );
};
