import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { string } from 'prop-types';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 40px;
  display: relative;
  margin-bottom: 15px;
`;

const IconContainer = styled.button`
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  float: ${(props) => (props.float ? props.float : 'right')};
  z-index: 101;
  position: absolute;
  top: 15px;
  ${(props) =>
    props.float
      ? props.float === 'left'
        ? 'left: 15px; text-align: left;'
        : 'right: 15px; text-align: right;'
      : 'right: 15px; text-align: right;'}
`;

IconContainer.propTypes = {
  float: string,
};

IconContainer.defaultProps = {
  float: 'right',
};

const Icon = styled(FontAwesomeIcon)`
  font-size: 20px;
  transition: all 0.3s;
  color: ${(props) => (props.active ? '#fff' : '#222')};
`;

export const Button = ({ icon, onClick, active }) => {
  return (
    <IconContainer onClick={() => onClick()}>
      <Icon icon={icon} active={active} />
    </IconContainer>
  );
};

Button.propTypes = {
  icon: string,
};

Button.defaultProps = {
  icon: '',
};
