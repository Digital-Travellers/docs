import React from 'react';

type BaseProps = {
  noMargin?: boolean;
};

type TextProps = BaseProps &
  (
    | { content: React.ReactNode; children?: never }
    | { content?: never; children: React.ReactNode }
  );

export const Text = ({
  content,
  children,
  noMargin,
}: TextProps): JSX.Element => (
  <p className={`text-neutral-700 ${noMargin ? '!m-0' : ''}`}>
    {content ?? children}
  </p>
);
