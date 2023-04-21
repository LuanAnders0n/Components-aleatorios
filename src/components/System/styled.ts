import styled from 'styled-components';
import system from '../../images/system.svg';

export const Container = styled.div`
  background-color: #b6dbd4;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .background {
    background-image: url(${system});
    width: 1500px;
    height: 650px;
    display: grid;
    place-items: center;
    color: #ffffff;
  }
  h1 {
    color: #ffffff;
    font-weight: bolder;
  }

  p {
    color: #ffffff;
    font-size: 30px;
  }

  .btn {
    width: 20em;
    height: 5em;
    border-radius: 1em;
    font-size: 30px;
    font-family: inherit;
    position: relative;
    overflow: hidden;
    z-index: 1;
    cursor: pointer;
    color: #ffffff;
    font-weight: bolder;
    background: #f48f46;

    :hover {
      background-color: #f59856;
      transition: 1ms;
    }
  }
`;
