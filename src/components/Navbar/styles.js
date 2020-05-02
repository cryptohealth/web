import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { string } from 'prop-types';

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 15px;
  display: table;
`;

const IconContainer = styled.button`
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  float: ${(props) => (props.float ? props.float : 'right')};
`;

IconContainer.propTypes = {
  float: string,
};

IconContainer.defaultProps = {
  float: 'right',
};

const Icon = styled(FontAwesomeIcon)`
  font-size: 28px;
  color: rgba(0, 0, 0, 0.5);
`;

export const Button = ({ icon }) => {
  return (
    <IconContainer>
      <Icon icon={icon} />
    </IconContainer>
  );
};

Button.propTypes = {
  icon: string,
};

Button.defaultProps = {
  icon: '',
};
