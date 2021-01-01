import React from 'react';

type Props = {
  children: React.ReactNode;
  show?: boolean;
  addClass?: string;
}

export const FlexRow = ({ children, addClass }: Props) => (
  <div className={`${`${addClass} `}row-flex`}>{children}</div>
);

export const FlexColumn = ({ children, addClass }: Props) => (
  <div className={`${`${addClass} `}column-flex`}>{children}</div>
);

export const ShouldRender = ({ show, children }: Props) => {
  if (show) return <>{children}</>;
  return null;
};
