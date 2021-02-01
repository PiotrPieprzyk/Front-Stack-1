import React, { useContext, useEffect } from "react";
import { Box, Text, Flex } from "rebass";
import { Icon } from "@iconify/react";
import baselineChatBubbleOutline from "@iconify/icons-ic/baseline-chat-bubble-outline";
import { ThemeContext } from "styled-components";

/**
 * @argument LeftContent @type React.Component
 * @argument RightContent @type React.Component
 */
export const AppBar = () => {
  const themeContext = useContext(ThemeContext);

  const defaultLeftContent = (
    <Flex alignItems="center">
      <Icon icon={baselineChatBubbleOutline} height={20} color={themeContext.colors.primary}></Icon>
      <Text fontSize={3} ml={1}>
        RANCHAT
      </Text>
    </Flex>
  );
  const defaultRightContent = <Text>MENU</Text>;

  const LeftContent = (props) => (props.LeftContent ? props.LeftContent : defaultLeftContent);
  const RightContent = (props) => (props.RightContent ? props.RightContent : defaultRightContent);

  return (
    <Flex alignItems="center" justifyContent="space-between" width="100%">
      <LeftContent />
      <RightContent />
    </Flex>
  );
};
