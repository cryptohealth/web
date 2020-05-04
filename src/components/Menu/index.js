import React from 'react';

import { any, string } from 'prop-types';

import { Background, Container, User, Items } from './styles';

export function Menu(props) {
  const items = [
    {title: 'Pagina inicial', link: '#'},
    {title: 'Minhas informações', link: '#'},
    {title: 'Minhas alergias', link: '#'},
    {title: 'Meus contatos', link: '#'},
    {title: 'Histórico médico', link: '#'},
    {title: 'Anotações', link: '#'},
    {title: 'Sair', link: '/entrar'},
  ]
  return (
    <>
      <Background active={props.active} />
      <Container active={props.active}>
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
