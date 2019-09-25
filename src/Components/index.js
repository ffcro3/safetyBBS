import styled, { keyframes } from 'styled-components';

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
  font-size: 20px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  outline: 0;
  height: 60px;
  background: #6696c8;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  padding: 0 50px;
  justify-content: space-between;

  div#logo {
    display: flex;
    align-items: center;

    img {
      max-height: 40px;
      max-width: 100%;
    }

    svg {
      margin-right: 15px;
      height: 70px;
      color: #333;
    }
  }
`;

export const Search = styled.div`
  min-width: 300px;

  input#search {
    border: 1px transparent;
    padding: 6px 10px;
    font-size: 12px;
    color: #fff;
    width: 100%;
    background: transparent;
    border-bottom: 0.5px solid #fff;

    ::placeholder {
      color: #fff;
    }
  }
`;

export const menu = styled.ul``;

export const Page = styled.div`
  position: absolute;
  flex-direction: row;
  min-height: 100%;
  min-width: 100%;
  background: #ccc;
`;

export const Container = styled.div`
  flex: 1;
  flex-direction: row;
  max-width: 90%;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1s);
  padding: 30px;
  margin: 40px auto;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

export const Table = styled.table`
  width: 100%;
  margin: 30px auto;
  border-spacing: 0;
  border-collapse: collapse;

  tr {
    border-top: none;

    & + tr {
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
    }
  }

  td {
    padding: 10px;
  }
`;

export const TableData = styled.td`
  font-size: 13px;
  height: 100%;
  text-align: center;
  vertical-align: middle;
`;

export const TableHeader = styled.td`
  font-size: 13px;
  height: 100%;
  text-align: center;
  vertical-align: middle;
  font-weight: 700;
`;

export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  button {
    outline: 0;
    border: 0;
    background: #7159c1;
    padding: 7px 7px;
    text-align: center;
    border-radius: 4px;
    color: #fff;

    &:hover {
      background: #483780;
    }
  }

  span {
    font-size: 11px;
    color: #666;
  }
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
