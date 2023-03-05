import LinkComponent, { Props as LinkComponentProps } from '@docusaurus/Link';

import React from 'react';

type LinkProps = {
  isTitle?: boolean;
};

export const Link: React.FC<LinkComponentProps & LinkProps> = ({
  isTitle,
  ...props
}) => (
  <LinkComponent
    {...props}
    className={`hover:text-${
      isTitle ? 'gray' : 'green'
    }-700 hover:decoration-wavy`}
    activeClassName={`hover:text-${
      isTitle ? 'gray' : 'green'
    }-700 hover:decoration-wavy`}
  />
);
