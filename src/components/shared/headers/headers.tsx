import { useColorMode } from '@docusaurus/theme-common';

import React from 'react';

type HeaderProps = {
  id?: string;
  content: string;
  asCode?: boolean;
};

const useHeaderColor = () => {
  const { colorMode } = useColorMode();

  return colorMode === 'dark' ? 'text-neutral-100' : 'text-neutral-700';
};

export const H1 = ({ asCode, id, content }: HeaderProps): JSX.Element => {
  const color = useHeaderColor();
  return (
    <h1
      id={id}
      className={`mb-4 text-4xl font-bold ${color}${
        asCode ? ' font-mono' : ''
      }`}
    >
      {content}
    </h1>
  );
};

export const H2 = ({ asCode, id, content }: HeaderProps): JSX.Element => {
  const color = useHeaderColor();
  return (
    <h2
      id={id}
      className={`mb-4 text-3xl font-bold ${color}${
        asCode ? ' font-mono' : ''
      }`}
    >
      {content}
    </h2>
  );
};

export const H3 = ({ asCode, id, content }: HeaderProps): JSX.Element => {
  const color = useHeaderColor();
  return (
    <h3
      id={id}
      className={`mb-4 text-2xl font-semibold ${color}${
        asCode ? ' font-mono' : ''
      }`}
    >
      {content}
    </h3>
  );
};

export const H4 = ({ asCode, id, content }: HeaderProps): JSX.Element => {
  const color = useHeaderColor();
  return (
    <h4
      id={id}
      className={`mb-2 text-xl font-semibold ${color}${
        asCode ? ' font-mono' : ''
      }`}
    >
      {content}
    </h4>
  );
};

export const H5 = ({ asCode, id, content }: HeaderProps): JSX.Element => {
  const color = useHeaderColor();
  return (
    <h5
      id={id}
      className={`mb-2 text-lg font-semibold ${color}${
        asCode ? ' font-mono' : ''
      }`}
    >
      {content}
    </h5>
  );
};
