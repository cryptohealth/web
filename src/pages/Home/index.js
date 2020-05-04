import React from 'react';

import { Screen, Card, Navbar } from '~/components';

import { Container } from './styles';

export default function Dashboard() {
  return (
    <Screen filter="#EDF5F2">
      <Navbar />
      <Container>
        <Card title="Compromissos de hoje"><input/></Card>
      </Container>
    </Screen>
  );
}
