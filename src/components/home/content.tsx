import Link from '@docusaurus/Link';
import { H1, H3, ItemList, Container } from '@site/src/components/shared';

import React from 'react';

import { Text } from '../shared/text';

const TITLES = [
  'Where travel and documentation meet innovation!',
  'Discover the future of travel documentation!',
  'Step into the future of seamless travel docs!',
  "Don't let documentation hold you back from travel!",
];

export const Content = (): JSX.Element => (
  <Container>
    <H1 content={TITLES[Math.floor(Math.random() * TITLES.length)]} />
    <Text
      content={
        <>
          Welcome to our docs! Feel free to contribute or open an issue in our{' '}
          <Link
            target="_blank"
            href="https://github.com/digital-travellers/docs/issues"
          >
            repo
          </Link>
          !
        </>
      }
    />
    <H3 content="👾 Start point" />
    <ItemList
      items={[
        {
          title: 'Working agreements',
          description: 'Our organization working agreements!',
          to: '/agreements',
        },
        {
          title: 'Modifying the docs',
          description:
            'Want to change anything? Read this to have a clearer idea!',
          to: '/improving-our-docs',
        },
      ]}
    />
    <H3 content="🗄️ Repositories" />
    <ItemList
      items={[
        {
          title: 'Documentation',
          description: 'Documentation about the actual documentation',
          href: 'https://github.com/digital-travellers/docs',
        },
        {
          title: 'Frontend - Web',
          description: 'Repository for our frontend application (TBD)',
          href: 'https://github.com/digital-travellers',
        },
        {
          title: 'Backend - X',
          description: 'Repository for our X backed application (TBD)',
          href: 'https://github.com/digital-travellers',
        },
        {
          title: 'Backend - Y',
          description: 'Repository for our Y backed application (TBD)',
          href: 'https://github.com/digital-travellers',
        },
      ]}
    />
  </Container>
);
