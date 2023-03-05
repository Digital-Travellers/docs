import React from 'react';

type TextProps = {
  content: React.ReactNode;
};

export const Text = ({ content }: TextProps): JSX.Element => (
  <p className="text-gray-700">{content}</p>
);
