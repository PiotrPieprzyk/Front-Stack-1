import React, { useContext, useEffect } from "react";
import { Box, Text, Flex, Button } from "rebass";
import styled, { ThemeContext } from "styled-components";


export const ChatMessage = ({ message, positionMessage }) => {
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
