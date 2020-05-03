import React from 'react';

import { Screen, Navbar } from '~/components';
import Card from '~/components/Card';

import { Text, TextGray, ContentCard } from './styles';

export default function Dashboard() {
  const menuButtons = [{ icon: 'bars', float: 'right', actions: () => {} }];

  return (
    <Screen filter="#EDF5F2">
      <Navbar buttons={menuButtons} />
      <Card title="Compromissos de hoje">
        <ContentCard>
          <Text>Consulta</Text>
          <TextGray>Daqui 2 horas</TextGray>
          <TextGray>Ver detalhes</TextGray>
        </ContentCard>
        <ContentCard>
          <Text>Cirurgia</Text>
          <TextGray>Daqui 5 horas</TextGray>
          <TextGray>Ver detalhes</TextGray>
        </ContentCard>
      </Card>
      <Card title="Mensalidades">
        <ContentCard>
          <span
            style={{
              width: 20,
              borderRadius: '50%',
              backgroundColor: '#ffff00ad',
              border: '1px solid gray',
            }}
          />
          <Text>Janeiro</Text>
          <TextGray>Ver detalhes</TextGray>
        </ContentCard>
        <ContentCard>
          <span
            style={{
              width: 20,
              borderRadius: '50%',
              backgroundColor: 'rgba(0, 255, 102, 0.68)',
              border: '1px solid gray',
            }}
          />
          <Text>Dezembro</Text>
          <TextGray>Ver detalhes</TextGray>
        </ContentCard>
      </Card>
      <Card title="Histórico">
        <ContentCard>
          <Text>Consulta</Text>
          <TextGray>23/01/2020</TextGray>
          <TextGray>Ver detalhes</TextGray>
        </ContentCard>
        <ContentCard>
          <Text>Cirurgia</Text>
          <TextGray>23/12/2019</TextGray>
          <TextGray>Ver detalhes</TextGray>
        </ContentCard>
        <ContentCard>
          <Text>Consulta</Text>
          <TextGray>01/12/2020</TextGray>
          <TextGray>Ver detalhes</TextGray>
        </ContentCard>
      </Card>
    </Screen>
  );
}
