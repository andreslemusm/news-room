import React, { Component } from 'react';

import styled from 'styled-components';

import SideMenu from './components/SideMenu';
import News from './components/News';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faBullhorn } from '@fortawesome/free-solid-svg-icons';

// library.add(faBullhorn);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  @media (min-width: 64rem) {
    flex-direction: row;
  }
`;

class App extends Component {
  render() {
    return (
      <Container>
        <SideMenu />
        <News />
      </Container>
    );
  }
}

export default App;
