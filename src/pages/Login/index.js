import React from 'react';
import { useHistory } from 'react-router-dom';

import cover from '~/assets/images/login-cover.jpg';
import logo from '~/assets/images/logo.png';
import { Screen, Input } from '~/components';
import Button from '~/components/Button';

import { Container, ForgotPassword } from './styles';

export default function Login() {
  const history = useHistory();

  return (
    <Screen image={cover} filter="rgba(255, 255, 255, 0.8)">
      <Container>
        <div>
          <img src={logo} className='logo' />
          <Input label="CPF" className="mb-10" />
          <Input label="Senha" type="password" className="mb-30" />
          <Button onClick={() => history.push('/home')}>Entrar</Button>
        </div>
        <ForgotPassword>
          Esqueceu sua senha? <b>Clique aqui.</b>
        </ForgotPassword>
      </Container>
    </Screen>
  );
}
