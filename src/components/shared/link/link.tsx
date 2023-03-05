import LinkComponent, { Props as LinkComponentProps } from '@docusaurus/Link';

import React from 'react';

export const Link: React.FC<LinkComponentProps> = (props) => (
  <LinkComponent
    {...props}
    className="hover:text-gray-700 hover:decoration-wavy"
    activeClassName="hover:text-gray-700 hover:decoration-wavy"
  />
);
