import styled from 'styled-components';

export const MenuContainer = styled.div`
  width: 100%;
  height: 40px;
  display: 'relative';
  margin-bottom: 15px;
`;

export const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  float: right;
  z-index: 101;
  position: absolute;
  top: 15px;
  left: 15px;
  text-align: left;
  color: white;
  font-size: 25px;
`;

export const Content = styled.div`
  height: 550px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export const Text = styled.span`
  font-size: 20px;
  color: white;
`;

export const IconCircleContainer = styled.div`
  width: 150px;
  border: 2px solid white;
  border-radius: 50%;
  height: 150px;
  box-shadow: inset 0px 0px 6px 1px #fff;
`;
