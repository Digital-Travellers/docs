import React from 'react';

type HeaderProps = {
  id?: string;
  content: string;
};

export const H1 = ({ id, content }: HeaderProps): JSX.Element => (
  <h1 id={id} className="mb-4 text-4xl font-bold text-gray-700">
    {content}
  </h1>
);

export const H2 = ({ id, content }: HeaderProps): JSX.Element => (
  <h2 id={id} className="mb-4 text-3xl font-bold text-gray-700">
    {content}
  </h2>
);

export const H3 = ({ id, content }: HeaderProps): JSX.Element => (
  <h3 id={id} className="mb-4 text-2xl font-semibold text-gray-700">
    {content}
  </h3>
);

export const H4 = ({ id, content }: HeaderProps): JSX.Element => (
  <h4 id={id} className="mb-2 text-xl font-semibold text-gray-700">
    {content}
  </h4>
);

export const H5 = ({ id, content }: HeaderProps): JSX.Element => (
  <h5 id={id} className="mb-2 text-lg font-semibold text-gray-700">
    {content}
  </h5>
);
