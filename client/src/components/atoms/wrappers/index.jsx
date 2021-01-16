export const FlexRow = ({ children, addClass }) => (
  <div className={`row-flex ${`${addClass || ""}`}`}>{children}</div>
);

export const FlexColumn = ({ children, addClass }) => (
  <div className={`column-flex ${`${addClass || ""}`}`}>{children}</div>
);

export const ShouldRender = ({ show, children }) => {
  if (show) return <>{children}</>;
  return null;
};
