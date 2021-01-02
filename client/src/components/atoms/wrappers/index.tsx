import React from "react";

type Props = {
  children: React.ReactNode;
  show?: boolean;
  addClass?: string;
};

export const FlexRow = ({ children, addClass }: Props) => (
  <div className={`row-flex ${`${addClass || ""}`}`}>{children}</div>
);

export const FlexColumn = ({ children, addClass }: Props) => (
  <div className={`column-flex ${`${addClass || ""}`}`}>{children}</div>
);

export const ShouldRender = ({ show, children }: Props) => {
  if (show) return <>{children}</>;
  return null;
};
