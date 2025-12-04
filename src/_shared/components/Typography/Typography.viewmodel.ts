import React from 'react';

import { ITypographyModel } from './Typography.model';

export const useTypographyViewModel = (props: ITypographyModel) => {
  const { as, variant, ...rest } = props;

  const Component =
    as ||
    (variant
      ? ['h1', 'h2', 'h3', 'h4', 'p', 'blockquote', 'code'].includes(variant)
        ? variant
        : 'p'
      : 'p');

  return {
    Component: Component as React.ElementType,
    variant,
    rest,
  };
};
