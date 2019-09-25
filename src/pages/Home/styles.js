import styled, { keyframes } from 'styled-components';
import { FadeIn } from 'react-animations';

export const FadeInAnimation = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const FadeOutAnimation = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

export const PageTitle = styled.h1`
  @import url('https://fonts.googleapis.com/css?family=Heebo:800|Montserrat&display=swap');
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
`;

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const SearchPage = styled.div`
  background: #bcc4db;
  animation: 1s ${FadeInAnimation};
  color: #333;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: left;
  align-items: left;
  height: 100vh;
  display: flex;
  flex-direction: column;

  span {
    margin: 5px 5%;
    margin-bottom: 20px;
    color: #3d405b;
    font-size: 16px;
  }

  span#closeBtn {
    position: absolute;
    @import url('https://fonts.googleapis.com/css?family=Heebo:800|Montserrat&display=swap');
    font-family: 'Heebo', sans-serif;
    color: #3d405b;
    font-size: 20px;
    margin: 30px 94%;
    cursor: pointer;
  }

  span#recents {
    @import url('https://fonts.googleapis.com/css?family=Heebo:800|Montserrat&display=swap');
    font-family: 'Monteerrat', sans-serif;
    font-size: 14px;
    color: #5c5c5c;
    margin: 10px 6%;

    svg {
      margin-right: 5px;
      justify-content: center;
      align-items: center;
      color: #919090;
    }
    small {
      margin-right: 10px;
      color: #919090;
    }
  }

  input {
    margin: 25px 5%;
    align-content: left;
    @import url('https://fonts.googleapis.com/css?family=Heebo:800|Montserrat&display=swap');
    font-family: 'Heebo', sans-serif;
    width: 80%;
    height: 16vh;
    font-size: 50px;
    border: transparent;
    color: #3d405b;
    background: transparent;
    border-bottom: 0.5px solid transparent;

    ::placeholder {
      color: #3d405b;
    }
  }
`;

export const BbsLink = styled.span`
  font-size: 13px;
  height: 100%;
  text-align: center;
  vertical-align: middle;
  color: #912f56;
  text-decoration: none;
`;
