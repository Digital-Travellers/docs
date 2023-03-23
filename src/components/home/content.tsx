import {
  H1,
  H3,
  ItemList,
  Container,
  Text,
  Link,
} from '@site/src/components/shared';

import React from 'react';

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
          to: '/docs/working-agreements',
        },
        {
          title: 'Modifying the docs',
          description:
            'Want to change anything? Read this to have a clearer idea!',
          to: '/docs/contribution',
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
          title: 'rst/frontend',
          description: 'Monorepository for our frontend applications',
          href: 'https://github.com/digital-travellers/rst-frontend',
          titleAsCode: true,
        },
        {
          title: 'rst/api-gateway',
          description: 'Repository for our api-gateway backed application',
          href: 'https://github.com/digital-travellers/rts-api-gateway',
          titleAsCode: true,
        },
        {
          title: 'rst/configuration',
          description: 'Repository for our configuration backed application',
          href: 'https://github.com/digital-travellers/rts-configuration',
          titleAsCode: true,
        },
        {
          title: 'rst/notifier',
          description: 'Repository for our notifier backed application',
          href: 'https://github.com/digital-travellers/rts-notifier',
          titleAsCode: true,
        },
        {
          title: 'rst/register',
          description: 'Repository for our register backed application',
          href: 'https://github.com/digital-travellers/rts-register',
          titleAsCode: true,
        },
        {
          title: 'rst/search',
          description: 'Repository for our search backed application',
          href: 'https://github.com/digital-travellers/rts-search',
          titleAsCode: true,
        },
      ]}
    />
  </Container>
);
