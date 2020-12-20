import React from 'react';

type Props = {
  children: HTMLElement;
}

export const FlexRow = ({ children }: Props) => (
  <div className="row-flex">{children}</div>
);

export const FlexColumn = ({ children }: Props) => (
  <div className="column-flex">{children}</div>
);
