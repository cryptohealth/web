import React from 'react';
import { useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Screen } from '~/components';

import {
  IconContainer,
  MenuContainer,
  Content,
  Text,
  IconCircleContainer,
} from './styles';

function Authorization() {
  const history = useHistory();

  return (
    <Screen filter="#5ad58f">
      <MenuContainer>
        <IconContainer onClick={() => history.push('/home')}>
          <FontAwesomeIcon icon="angle-left" active />
        </IconContainer>
      </MenuContainer>
      <Content>
        <Text>Para autorizar a visualização e alteração dos seus dados</Text>
        <IconCircleContainer>
          <FontAwesomeIcon
            icon="mobile"
            active
            style={{ color: 'white', fontSize: 80, marginTop: '0.4em' }}
          />
        </IconCircleContainer>

        <Text>
          <b>Aproxime seu aparelho</b> no local indicado
        </Text>
      </Content>
    </Screen>
  );
}

export default Authorization;
