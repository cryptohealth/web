import styled from 'styled-components';

export const Text = styled.span`
  width: 70px;
`;

export const TextGray = styled.span`
  color: rgba(0, 0, 0, 0.42);
  font-weight: 200;
`;

export const ContentCard = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const ContainerAuthorizationButton = styled.div`
  position: absolute;
  bottom: 0;
  width: 250px;
  height: 54px;
  overflow: hidden;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`;

export const BodyAuthorizationButton = styled.div`
  position: fixed;
  z-index: 100;
  width: 250;
  text-align: center;
`;

export const AuthorizationButton = styled.div`
  width: 250px;
  height: 290px;
  border-radius: 50%;
  background-color: #0CD590;
  color: white;
  font-weight: 600;
  font-size: 15px;
  padding-top: 20px;
  transition: 0s box-shadow;
  cursor: pointer;
`;
