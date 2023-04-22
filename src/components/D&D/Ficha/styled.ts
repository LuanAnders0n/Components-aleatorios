import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    width: 700px;
    height: 750px;
    border-radius: 30px;
    background: lightgrey;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 50px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 26px -18px inset;
  }
`;
