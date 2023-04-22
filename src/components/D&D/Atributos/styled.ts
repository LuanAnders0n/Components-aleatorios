import styled from 'styled-components';

export const Container = styled.div`
  .atributos {
    width: 100px;
    height: 100px;
    background-color: whitesmoke;
    border-radius: 15px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 15px;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .input {
    width: 30px;
    height: 30px;
    border-radius: 20px;
    text-align: center;
  }
`;
