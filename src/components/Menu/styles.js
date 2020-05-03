import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  transition: all 1s;
  opacity: ${(props) => (props.active ? 1 : 0)};
  visibility: ${(props) => (props.active ? 'visible' : 'hidden')};
`;

export const Container = styled.div`
  width: 300px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 3px;
  background: #fff;
  transition: all linear 0.3s;
  z-index: 100;
  transition: transform 0.3s ease-out;
  transform: ${(props) =>
    props.active ? 'translateX(0);' : 'translateX(-100%)'};
`;

const UserContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 15px;
  justify-content: flex-start;
`;

const Photo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background: #eee;
  margin-right: 20px;
`;

const InfoContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Name = styled.span`
  font-size: 18px;
  color: #222;
  font-weight: 700;
  display: block;
`;

const Identifier = styled.span`
  font-size: 13px;
  color: #222;
  font-weight: 300;
  display: block;
`;

export const User = (props) => {
  return (
    <UserContainer>
      <Photo src={props.photo} />
      <InfoContainer>
        <Name>{props.name}</Name>
        <Identifier>{props.identifier}</Identifier>
      </InfoContainer>
    </UserContainer>
  );
};

const Ul = styled.ul`
  padding: 15px;
`;

const Li = styled.li`
  margin-bottom: 20px;
`;

const A = styled(Link)`
  width: 100%;
  display: block;
  line-height: 30px;
  border-left: 4px solid #0cd590;
  padding-left: 10px;
  font-size: 13px;
  color: #333;
  font-weight: 600;
`;

export const Items = (props) => {
  return (
    <Ul>
      {props.items.map((item, index) => {
        return (
          <Li key={index}>
            <A to={item.link}>{item.title}</A>
          </Li>
        )
      })}
    </Ul>
  );
};

Items.defaultProps = {
  items: []
}
