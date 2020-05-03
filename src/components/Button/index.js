import React from 'react';

import { any, func } from 'prop-types';

import { Container } from './styles';

function Button({ onClick, children }) {
  return <Container onClick={onClick}>{children}</Container>;
}

Button.propTypes = {
  children: any.isRequired,
  onClick: func.isRequired,
};

export default Button;
