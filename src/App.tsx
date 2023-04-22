import React from 'react';
import { Container } from './styled';
import Global from './style/global';
import Ficha from './components/D&D/Ficha';

const App = () => {
  return (
    <Container>
      <Global />
      <Ficha></Ficha>
    </Container>
  );
};

export default App;
