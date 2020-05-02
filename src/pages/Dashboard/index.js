import React from 'react';

import { Screen, Card, Navbar } from '~/components';

import { Container } from './styles';

export default function Dashboard() {
  const menuButtons = [{ icon: 'bars', float: 'right', actions: () => {} }];
  return (
    <Screen filter="#EDF5F2">
      <Navbar buttons={menuButtons} />
      <Container>
        <Card title="Compromissos de hoje">teste</Card>
      </Container>
    </Screen>
  );
}
