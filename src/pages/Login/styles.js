import styled from 'styled-components';

export const LoginContainer = styled.div`
  flex: 1;
  flex-direction: row;
  max-width: 400px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 30px;
  min-height: 400px;
  max-height: 600px;
  margin: 90px auto;
  align-content: center;
  justify-content: center;
  align-items: center;

  img {
    display: flex;
    height: 40px;
    margin: 40px auto;
    align-items: center;
    text-align: center;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }

  input {
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    padding: 6px 10px;
    border-radius: 4px;
    font-size: 14px;
    margin: 10px auto;
    width: 80%;

    transition: border 0.25s ease-out;
  }

  span {
    margin-top: -20px;
    display: flex;
    font-size: 18px;
    text-align: center;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-bottom: 50px;
    color: #467fd7;
  }

  a {
    display: flex;
    font-size: 11px;
    justify-content: center;
    margin: 5px auto;
    align-content: center;
    color: #467fd7;
    text-decoration: none;
  }
`;

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin: 30px auto;
  border: 0px;
  outline: 0px;
  padding: 10px 50px;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  background: #467fd7;
  border-radius: 4px;
`;
