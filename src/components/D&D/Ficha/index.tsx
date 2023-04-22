import { Container } from './styled';
import Race from '../Race';
import Classe from '../Classe';
import Atributos from '../Atributos';
import Skills from '../Skills';

const Ficha = () => {
  return (
    <Container>
      <div className="card">
        <input type="text" placeholder="Name" />
        <Race />
        <Classe />
        <Atributos label="Força" />
        <Atributos label="Destreza" />
        <Atributos label="Constituição" />
        <Atributos label="Inteligencia" />
        <Atributos label="Sabedoria" />
        <Atributos label="Carisma" />
        Pericias
        <Skills label="Acrobacia" />
        <Skills label="Arcanismo" />
        <Skills label="Atletismo" />
        <Skills label="Atuação" />
        <Skills label="Blefar" />
        <Skills label="Furtividade " />
        <Skills label="História" />
        <Skills label="Intimidação" />
        <Skills label="Intuição" />
        <Skills label="Investigação" />
        <Skills label="Lidar com Animais" />
        <Skills label="Medicina" />
        <Skills label="Natureza" />
        <Skills label="Percepção" />
        <Skills label="Persuasão" />
        <Skills label="Prestidigitação" />
        <Skills label="Religião" />
        <Skills label="Sobrevivência" />
      </div>
    </Container>
  );
};

export default Ficha;
