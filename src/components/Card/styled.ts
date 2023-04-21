import styled from 'styled-components';

export const Container = styled.div`
  .card {
    width: 190px;
    height: 254px;
    background: rgb(38, 38, 38);
    box-shadow: 7px 5px 10px rgba(0, 0, 0, 0.333);
  }

  .imge {
    height: 70px;
    background-color: #ff5858;
  }

  .imge .Usericon {
    background-color: #414141;
    transform: translateX(10px) translateY(10px);
    width: 50px;
    height: 50px;
    border-radius: 10px;
  }

  .imge .UserName {
    background-color: #414141;
    width: 60px;
    height: 15px;
    border-width: 10px;
    border-radius: 5px;
    border-color: #262626;
    color: #262626;
    font-size: 15px;
    font-weight: bold;
    transform: translateX(70px) translateY(-35px);
  }

  .imge .Id {
    background-color: #414141;
    width: 100px;
    height: 15px;
    border-width: 10px;
    border-radius: 5px;
    border-color: #262626;
    color: #262626;
    font-size: 15px;
    font-weight: bold;
    transform: translateX(70px) translateY(-25px);
  }

  .Description {
    border-color: #141414;
    background-color: #414141;
    transform: translate(5px, 6px);
    width: 180px;
    height: 130px;
    border-radius: 5px;
  }

  /*______Social Media______*/
  .social-media:before {
    content: ' ';
    display: block;
    width: 100%;
    height: 2px;
    transform: translatey(10px);
    background: #414141;
  }

  .social-media a {
    margin-right: 15px;
    text-decoration: none;
    color: inherit;
  }

  .social-media a:last-child {
    margin-right: 0;
  }

  .social-media a svg {
    color: #ffffff;
    transform: translatex(25px) translateY(20px);
    width: 20px;
    fill: currentColor;
  }
`;
