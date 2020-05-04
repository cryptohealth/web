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
  position: relative;
  z-index: 100;
  width: 250;
  text-align: center;
`;

export const AuthorizationButton = styled.div`
  width: 250px;
  height: 290px;
  border-radius: 50%;
  background-color: rgba(0, 255, 102, 0.68);
  color: white;
  font-weight: 600;
  font-size: 15px;
  padding-top: 20px;
  box-shadow: rgb(107, 251, 147) 0px 13px 14px 9px;
`;
