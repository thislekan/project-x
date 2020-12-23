import React from 'react';
import { Redirect } from 'react-router-dom';
import userAuth from '../utils/userAuth';

type Props = {
  children: any,
  foo: string,
}

const Protected = (props: Props) => {
  if (userAuth.authenticate()) return <>{props.children}</>;
  return <Redirect to="/" />;
};

export default Protected;
