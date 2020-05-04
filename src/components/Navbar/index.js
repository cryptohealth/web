import React, { useState } from 'react';

import { array } from 'prop-types';

import { Menu } from '../Menu';
import { Container, Button } from './styles';

export function Navbar({ buttons }) {
  const [ menuStatus, setMenuStatus ] = useState(false);
  return (
    <Container>
      <Menu active={menuStatus} />
      {buttons.map((button, index) => (
        <Button key={index} icon={button.icon} float={button.float} />
      ))}
      <Button
        active={menuStatus}
        icon="bars"
        onClick={() => {
          setMenuStatus(!menuStatus);
        }}
      />
    </Container>
  );
}

Navbar.propTypes = {
  buttons: array,
};

Navbar.defaultProps = {
  buttons: [],
};
