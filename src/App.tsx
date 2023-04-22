import React from 'react';
import { Container } from './styled';
import Global from './style/global';

import Npc from './components/Npc/System';

const App = () => {
  return (
    <Container>
      <Global />
      <Npc />
    </Container>
  );
};

export default App;
