import { cn } from '@/_shared/utils/cn';
import { ICardModel } from './Card.model';
import { useCardViewModel } from './Card.viewmodel';
import { cardVariants } from './Card.styles';

export const Card = (props: ICardModel) => {
    const { className, children, ...rest } = useCardViewModel(props);

    return (
        <div className={cn(cardVariants(), className)} {...rest}>
            {children}
        </div>
    );
};
