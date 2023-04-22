import styled from 'styled-components';
import rpg from '../../images/rpg.jpg';

export const Container = styled.div`
  background-color: #e1e1e1;

  .backgroundImg {
    width: 100vw;
    height: 100vh;
    background-image: url(${rpg});
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .background {
    width: 400px;
    height: 650px;
    border-radius: 20px;
    display: grid;
    place-items: center;
    background: linear-gradient(180deg, #d6fbdc 20.7%, #d7effc 95.36%);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }
  h1,
  h2 {
    color: #2d2e2e;
  }
  .btn {
    width: 150px;
    height: 60px;
    border: 3px solid #53b560;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s;
    background-color: #ffffff;
    font-size: 1.2rem;
    font-weight: 500;

    :hover {
      background: #53b560;
      color: #ffffff;
      font-size: 1.5rem;
      font-weight: 900;
    }
  }
`;
