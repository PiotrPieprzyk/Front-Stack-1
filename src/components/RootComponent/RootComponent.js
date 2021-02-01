import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Cursor } from "../Cursor/Cursor";
import { theme } from "../../theme";
import { ChatPage } from "../../pages/chat/chat";
import { Flex, Box } from "rebass";
import starsBackground from "../../assets/background/stars_background.png";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
`;

// GLOBAL STYLE
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap');
  body{
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    cursor: none;
  }
  button{
    background-color: none !important;
  }
`;
background: ;

export const RootComponent = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {/*<Cursor />*/}
    <BrowserRouter>
      <Route path="/">
        <Flex
          width="100vw"
          height="100vh"
          p={3}
          flexDirection="column"
          bg={theme.colors.black}
          sx={{
            background: `linear-gradient(180deg, rgba(0, 0, 0, 0.62) 0%, rgba(0, 0, 0, 0) 100%), url(${starsBackground});`,
          }}
        >
          <ChatPage></ChatPage>
        </Flex>
      </Route>
    </BrowserRouter>
  </ThemeProvider>
);
