import React from 'react';
import { Container } from './styled';

interface SkillsProps {
  label: string;
}

const Skills = (props: SkillsProps) => {
  return (
    <div>
      <Container>
        <form>
          <input type="radio" />
          <input type="number" className="mod" />
          <label htmlFor="">{props.label}</label>
        </form>
      </Container>
    </div>
  );
};

export default Skills;
