import React from 'react';

import { H4 } from '../headers';
import { Link } from '../link';
import { Text } from '../text';

type Item = {
  title: string;
  description?: string;
  titleAsCode?: boolean;
} & ({ to: string; href?: never } | { href: string; to?: never });

type ItemListProps = {
  withSidebar?: boolean;
  items: Item[];
};

export const ItemList = ({ items, withSidebar }: ItemListProps) =>
  items.length ? (
    <div
      className={`grid grid-cols-1 gap-3 lg:grid-cols-${
        withSidebar ? '2' : '3'
      } lg:gap-8 md:grid-cols-2 md:gap-6 mb-8`}
    >
      {items.map(({ title, description, titleAsCode, to, href }) => (
        <div
          id={to}
          className="py-3 px-4 rounded-lg border border-gray-200 border-solid shadow-lg shadow-gray-100 hover:shadow-gray-200 hover:transition-shadow ease-in-out duration-200"
        >
          <Link to={to} href={href} isTitle>
            <H4 content={title} asCode={titleAsCode} />
          </Link>
          {description ? <Text content={description} /> : null}
        </div>
      ))}
    </div>
  ) : null;
