import { tagMapping } from '@/_shared/constants/tag-mapping';

import { ITypographyModel } from './Typography.model';

export const useTypographyViewModel = (props: ITypographyModel) => {
  const { as, variant, ...rest } = props;

  const Component = as || tagMapping[variant as string] || 'p';

  return {
    Component,
    variant,
    rest,
  };
};
