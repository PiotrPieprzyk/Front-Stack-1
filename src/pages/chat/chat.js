import React, { useContext } from "react";
import { Flex } from "rebass";
import { ThemeContext } from "styled-components";
import { AppBar } from "../../components/LayoutElement/AppBar/AppBar";

import { ChatMessagesWrapper } from "./components/ChatMessages/ChatMessageWrapper";
import { BottomToolBar } from "./components/BottomToolBar/BottomToolBar";
import baselinePersonOutline from '@iconify/icons-ic/baseline-person-outline';

export const ChatPage = () => {
  const theme = useContext(ThemeContext);
  const userName = 'Marian 12';
  return (
    <Flex height="100%" color="white" flexDirection="column">
      <AppBar
        left={{
          leftText: userName,
          leftIcon: baselinePersonOutline,
        }}
        right={{
          rightText: 'Back',
          rightLink: '/back'
        }}
      />
      <ChatMessagesWrapper />
      <BottomToolBar />
    </Flex>
  );
};
