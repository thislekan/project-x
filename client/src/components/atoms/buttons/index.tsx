import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  content: string;
  route?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const NavButton = ({ content, route }: Props) => (
  <Link to={`${route}`}>{content}</Link>
);

export const SimpleButton = ({ content, onClick }: Props) => (
  <button onClick={onClick}>{content}</button>
);
