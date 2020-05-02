import React from 'react';

import { array } from 'prop-types';

import { Container, Button } from './styles';

export function Navbar({ buttons }) {
  return (
    <Container>
      {buttons.map((button, index) => (
        <Button key={index} icon={button.icon} float={button.float} />
      ))}
    </Container>
  );
}

Navbar.propTypes = {
  buttons: array,
};

Navbar.defaultProps = {
  buttons: [],
};
