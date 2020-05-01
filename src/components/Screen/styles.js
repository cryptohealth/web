import styled from 'styled-components';
import image from '~/assets/images/login-cover.jpg';

export const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-image: url(${image});
  background-position: center right;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Filter = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background: rgba(255, 255, 255, 0.7);
`
