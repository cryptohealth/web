import React from 'react';

import PropTypes from 'prop-types';

import { Container, Content, Title } from './styles';

function Card({ title, children }) {
  return (
    <Container>
      <Content>
        <Title>{title}</Title>
        {children}
      </Content>
    </Container>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Card;
