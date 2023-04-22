import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  .mod {
    width: 20px;
    height: 20px;
    margin: 5px;
  }
`;
