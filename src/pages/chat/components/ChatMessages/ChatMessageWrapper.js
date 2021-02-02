import React, { useContext, useEffect, useState } from "react";
import { Box, Text, Flex, Button } from "rebass";
import styled, { ThemeContext } from "styled-components";

import { ChatMessage } from "./ChatMessage";

export const ChatMessagesWrapper = () => {
  const [messages, setMessages] = useState([
    {
      positionMessage: "flex-end",
      message: "Hello",
    },
    {
      positionMessage: "flex-start",
      message: "Lorem culpa eu non sint sit nulla laborum.Lorem culpa eu non sint sit nulla laborum.Lorem culpa eu non sint sit nulla",
    },
    {
      positionMessage: "flex-end",
      message: "What?",
    },
    {
      positionMessage: "flex-start",
      message: "Lorem culpa eu non sint sit nulla laborum.Lorem culpa eu non sint sit nulla laborum.",
    },
    {
      positionMessage: "flex-end",
      message: "lol",
    },
  ]);
  return (
    <Box flex="1" overflow="scroll" p={3}>
      {messages.map((message, index) => (
        <ChatMessage key={index} message={message.message} positionMessage={message.positionMessage}></ChatMessage>
      ))}
    </Box>
  );
};
