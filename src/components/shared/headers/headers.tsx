import React from 'react';

type HeaderProps = {
  content: string;
};

export const H1 = ({ content }: HeaderProps): JSX.Element => (
  <h1 className="mb-4 text-4xl font-bold text-gray-700">{content}</h1>
);

export const H3 = ({ content }: HeaderProps): JSX.Element => (
  <h3 className="mb-4 text-2xl font-semibold text-gray-700">{content}</h3>
);

export const H4 = ({ content }: HeaderProps): JSX.Element => (
  <h3 className="mb-2 text-lg font-semibold text-gray-700">{content}</h3>
);
