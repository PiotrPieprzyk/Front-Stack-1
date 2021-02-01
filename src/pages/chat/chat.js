import Icon from "@iconify/react";
import React, { useContext, useEffect } from "react";
import { Box, Text, Flex, Button } from "rebass";
import styled, { ThemeContext } from "styled-components";
import { TextareaAutoResising } from "../../components/Input/TextareaAutoResising";
import { AppBar } from "../../components/LayoutElement/AppBar/AppBar";
import sendIcon from "@iconify/icons-mdi/send";

const ChatMessagesWrapper = (props) => {
  return (
    <Box flex="1" overflow="scroll" mt={4}>
      {props.children}
    </Box>
  );
};


const ChatMessage = ({ message, positionMessage }) => {
  const theme = useContext(ThemeContext);
  return (
    <Flex width="100%" justifyContent={positionMessage} mt={2}>
      <Box
        p={2}
        maxWidth="80%"
        backgroundColor={"rgba(0, 0, 0, 0.8)"}
        sx={{
          borderRadius: "14px",
        }}
      >
        <Text css="word-break: break-word;">{message}</Text>
      </Box>
    </Flex>
  );
};

export const ChatPage = () => {
  const theme = useContext(ThemeContext);
  return (
    <Flex height="100%" color="white" flexDirection="column">
      <AppBar LeftContent />
      <ChatMessagesWrapper>
        <ChatMessage message="Hello" positionMessage="flex-end"></ChatMessage>
        <ChatMessage
          message="Lorem culpa eu non sint sit nulla laborum.Lorem culpa eu non sint sit nulla laborum.Lorem culpa eu non sint sit nulla laborum."
          positionMessage="flex-start"
        ></ChatMessage>
        <ChatMessage
          message="Lorem culpa eu non sint sit nulla laborum.Lorem culpa eu non sint sit nulla laborum.Lorem culpa eu non sint sit nulla laborum."
          positionMessage="flex-start"
        ></ChatMessage>
        <ChatMessage
          message="Lorem culpa eu non sint sit nulla laborum.Lorem culpa eu non sint sit nulla laborum.Lorem culpa eu non sint sit nulla laborum."
          positionMessage="flex-start"
        ></ChatMessage>
        <ChatMessage
          message="Lorem culpa eu non sint sit nulla laborum.Lorem culpa eu non sint sit nulla laborum.Lorem culpa eu non sint sit nulla laborum."
          positionMessage="flex-start"
        ></ChatMessage>
        <ChatMessage
          message="Lorem culpa eu non sint sit nulla laborum.Lorem culpa eu non sint sit nulla laborum.Lorem culpa eu non sint sit nulla laborum."
          positionMessage="flex-start"
        ></ChatMessage>
        <ChatMessage
          message="Lorem culpa eu non sint sit nulla laborum.Lorem culpa eu non sint sit nulla laborum.Lorem culpa eu non sint sit nulla laborum."
          positionMessage="flex-start"
        ></ChatMessage>
      </ChatMessagesWrapper>
      <Flex alignItems="center" mt={3} >
        <TextareaAutoResising />
        <Button
          sx={{
            background: "none",
          }}
          pr={0}
          pl={3}
        >
          <Icon icon={sendIcon} height={24} color={theme.colors.primary}></Icon>
        </Button>
      </Flex>
    </Flex>
  );
};
