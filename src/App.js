import React, { Component } from 'react';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';

library.add(faBullhorn);

class App extends Component {
  render() {
    const Title = styled.h1`
      font-family: sans-serif;
    `;

    return (
      <Title>
        <FontAwesomeIcon icon="bullhorn" /> News Room
      </Title>
    );
  }
}

export default App;
