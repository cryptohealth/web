import React from 'react';

import { any } from 'prop-types';

import { Container, Filter } from './styles';

export function Screen(props) {
  const { children } = props;
  return <Container><Filter>{children}</Filter></Container>;
}

Screen.propTypes = {
  children: any,
};

Screen.defaultProps = {
  children: '',
};
