import React from 'react';

import cover from '~/assets/images/login-cover.jpg';
import { Screen, Input, Button } from '~/components';

import { Container, ForgotPassword } from './stylees';

export default function Login() {
  return (
    <Screen image={cover} filter="rgba(255, 255, 255, 0.8)">
      <Container>
        <div>logo</div>
        <div>
          <Input label="CPF" className="mb-10" />
          <Input label="Senha" type="password" className="mb-30" />
          <Button>Entrar</Button>
        </div>
        <ForgotPassword>
          Esqueceu sua senha? <b>Clique aqui.</b>
        </ForgotPassword>
      </Container>
    </Screen>
  );
}
