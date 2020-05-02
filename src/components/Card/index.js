import React from 'react';

import { any, string } from 'prop-types';

import { Container, Title, Content } from './styles';

export function Card(props) {
  const { children, title } = props;
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  );
}

Card.propTypes = {
  children: any,
  title: string,
};

Card.defaultProps = {
  children: '',
  title: '',
};
