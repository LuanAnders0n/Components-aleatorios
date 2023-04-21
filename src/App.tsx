import React from 'react';
import { Container } from './styled';
import Global from './style/global';

import System from './components/System/System';

const App = () => {
  return (
    <Container>
      <Global />
      <System />
    </Container>
  );
};

export default App;
