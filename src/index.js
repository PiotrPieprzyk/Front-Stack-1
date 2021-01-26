import React from "react";
import ReactDom from "react-dom";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { Clicker } from "./components/clicker";

console.log("wokring");

const root = document.querySelector(".root");

const theme = {
  colors: {
    white: "white",
    black: "black",
  },
};

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
`;

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
  }
`;

const RoomComponent = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      <Clicker></Clicker>
    </Wrapper>
  </ThemeProvider>
);

ReactDom.render(<RoomComponent />, root);
