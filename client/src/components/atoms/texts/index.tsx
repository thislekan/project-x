import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  text: string,
  route?: string,
}

export const LargeHeader = ({ text }: Props) => <h1>{text}</h1>;

export const MediumHeader = ({ text }: Props) => <h3>{text}</h3>;

export const SmallHeader = ({ text }: Props) => <h6>{text}</h6>;

export const Paragraph = ({ text }: Props) => <p>{text}</p>;

export const Span = ({ text }: Props) => <span>{text}</span>;

export const Anchor = ({ text, route }: Props) => (
  <Link to={route || '/'}>{text}</Link>
);
