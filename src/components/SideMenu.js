import React from 'react';
import styled from 'styled-components';

const Container = styled.aside`
  display: flex;
  background: #222;
  flex-wrap: wrap;
  align-items: strech;
  @media (min-width: 64rem) {
    align-content: flex-start;
  }
`;

export default function SideMenu() {
  return <Container>Hola</Container>;
}
