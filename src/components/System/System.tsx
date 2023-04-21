import React, { useState } from 'react';
import { Container } from './styled';
import { poderes } from './poderes';

const System = () => {
  const [poderesDisponiveis, setPoderesDisponiveis] = useState([...poderes]);
  const [poderAleatorio, setPoderAleatorio] = useState('');

  function gerarPoderAleatorio() {
    if (poderesDisponiveis.length === 0) {
      window.location.reload();
      return;
    }

    const indiceAleatorio = Math.floor(
      Math.random() * poderesDisponiveis.length
    );
    const novoPoderAleatorio = poderesDisponiveis[indiceAleatorio];

    setPoderAleatorio(novoPoderAleatorio);
    setPoderesDisponiveis(
      poderesDisponiveis.filter(p => p !== novoPoderAleatorio)
    );
  }
  return (
    <div>
      <Container>
        <div className="background">
          <h1>PARABENS VOCE FOI ESCOLHIDO</h1>
          <p>Aberte o botão e receba um poder</p>
          <p> Seu poder é: {poderAleatorio}</p>

          <button onClick={gerarPoderAleatorio} className="btn">
            BOA SORTE HEROI!!
          </button>
        </div>
      </Container>
    </div>
  );
};

export default System;
