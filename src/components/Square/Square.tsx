import React from 'react';
import { Container } from './styled';

interface Iconsprops {
  img?: any;
  title: string;
  number: string;
}

const Square = (props: Iconsprops) => {
  return (
    <div>
      <Container>
        <div className="box-hover">
          <div className="box-body">
            <div className="itens">
              <svg className="img">{props.img}</svg>
              <h1 className="quantity">{props.number}</h1>
              <h2 className="text">{props.title}</h2>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Square;
