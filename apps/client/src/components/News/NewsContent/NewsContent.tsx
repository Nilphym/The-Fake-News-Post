import React from 'react';

export const NewsContent = ({
  children,
}: {
  children: string | React.ReactNode;
}) => {
  return <p>{children}</p>;
};
