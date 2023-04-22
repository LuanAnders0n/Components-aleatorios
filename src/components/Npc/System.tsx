import React, { useState } from 'react';
import { Container } from './styled';
import { nomes } from './Nome';
import { profissao } from './Profissão';
import { race } from './Raça';
const Npc = () => {
  const [randomName, setRandomName] = useState('');
  const [randomJob, setRandomJob] = useState('');
  const [randomRace, setRandomRace] = useState('');

  function gerarrandomName() {
    const indiceNome = Math.floor(Math.random() * nomes.length);
    const novoNome = nomes[indiceNome];
    setRandomName(novoNome);
  }

  function gerarProfissaoAleatoria() {
    const indiceProfissao = Math.floor(Math.random() * profissao.length);
    const novoProfissao = profissao[indiceProfissao];
    setRandomJob(novoProfissao);
  }

  function gerarRadomRace() {
    const indiceRace = Math.floor(Math.random() * race.length);
    const newRace = race[indiceRace];
    setRandomRace(newRace);
  }

  function click() {
    gerarrandomName();
    gerarProfissaoAleatoria();
    gerarRadomRace();
  }

  return (
    <div>
      <Container>
        <div className="backgroundImg">
          <div className="background">
            <h1>Nome: {randomName}</h1>
            <h2>Profissão: {randomJob}</h2>
            <h2>Raça: {randomRace}</h2>

            <button onClick={click} className="btn">
              Gerar NPC
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Npc;
