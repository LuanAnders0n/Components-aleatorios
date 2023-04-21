import styled from 'styled-components';

export const Container = styled.div`
  margin: 10%;

  .box-body {
    width: 150px;
    height: 250px;
    border-radius: 15px;

    :hover {
      transform: scale(0.95);
      transition: all 0.3s;
    }
  }

  .box-hover {
  }

  .itens {
  }

  h1 {
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h2 {
    color: rgba(149, 149, 255, 1);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .img {
    width: 100px;
    height: 100px;
  }

  .text {
    font-size: 30px;
    font-weight: 600;
  }
  .quantity {
    font-size: 40px;
    font-weight: 600;
  }

  .box-body-1 {
    background-color: #c7c7ff;
  }
  .box-body-2 {
    background-color: #ffd8be;
  }
  .box-body-3 {
    background-color: #a9ecbf;
  }
  .box-body-4 {
    background-color: #f3bbe1;
  }
`;
