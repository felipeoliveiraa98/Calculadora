import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

export const Main = styled.main`
  background-color: #1c3040;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const H1 = styled.h1`
  color: #f5f5dc;
  margin: 30px;
`;

export const Input = styled.input`
  width: 30vw;
  border: none;
  border-radius: 20px;
  padding: 10px;
  margin: 8px;

  &::placeholder {
    color: #1c3040;
    text-align: center;
  }
`;

export const btn = styled.button`
  border: none;
  padding: 10px 15px;
  color: #00bfff;
  border-radius: 5px;
  margin: 5px;
  background-color: white;

  &: hover {
    background-color: #e8e8e8;
    color: #00bfff;
  }
`;

export const H3 = styled.h3`
  border-radius: 50%;
  padding: 30px;
  color: #f5f5dc;
  margin: 20px;
  font-size: 50px;
`;
