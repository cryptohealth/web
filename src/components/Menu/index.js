import React from 'react';

import { Background, Container, User, Items } from './styles';

export function Menu({ active }) {
  const items = [
    { title: 'Pagina inicial', link: '/home' },
    { title: 'Minhas informações', link: '/home' },
    { title: 'Minhas alergias', link: '#' },
    { title: 'Meus contatos', link: '#' },
    { title: 'Histórico médico', link: '#' },
    { title: 'Anotações', link: '#' },
    { title: 'Sair', link: '/' },
  ];
  return (
    <>
      <Background active={active} />
      <Container active={active}>
        <User
          name="André Paulo"
          identifier="123.456.789-10"
          photo="https://avatars0.githubusercontent.com/u/20177954?s=60&v=4"
        />
        <Items items={items} />
      </Container>
    </>
  );
}
