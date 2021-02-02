import React, { useContext } from "react";
import { Text, Flex, Button } from "rebass";
import { Icon } from "@iconify/react";
import baselineChatBubbleOutline from "@iconify/icons-ic/baseline-chat-bubble-outline";
import { ThemeContext } from "styled-components";
import { Link } from "react-router-dom";

export const AppBar = (props) => {
  const themeContext = useContext(ThemeContext);
  const { leftIcon, leftText, leftLink, leftFun, leftIconColor } = props.left ? props.left : {};
  const { rightIcon, rightText, rightLink, rightFun, rightIconColor } = props.right ? props.right : {};
  const left = {
    icon: leftIcon ? leftIcon : baselineChatBubbleOutline,
    text: leftText ? leftText : "RANCHAT",
    link: leftLink ? leftLink : "/",
    fun: leftFun ? leftFun : null,
    iconColor: leftIconColor ? leftIconColor : themeContext.colors.primary,
  };
  const right = {
    icon: rightIcon ? rightIcon : null,
    text: rightText ? rightText : "Menu",
    link: rightLink ? rightLink : null,
    fun: rightFun
      ? rightFun
      : () => {
          console.log("menu");
        },
  };

  const Content = ({ side }) => {
    let LinkOrButton;
    LinkOrButton = side.fun ? "button" : null;
    LinkOrButton = side.link ? Link : LinkOrButton;
    let hanglersEvent = {
      onClick: side.fun ? side.fun : null,
      to: side.link ? side.link : null,
    };
    if (LinkOrButton) {
      return (
        <LinkOrButton {...hanglersEvent}>
          <Flex alignItems="center">
            {side.icon ? <Icon icon={side.icon} height={24} color={side.iconColor}></Icon> : null}
            <Text fontSize={3} ml={1} color="white">
              {side.text}
            </Text>
          </Flex>
        </LinkOrButton>
      );
    } else {
      return null;
    }
  };
  return (
    <Flex alignItems="center" justifyContent="space-between" width="100%" p={3}>
      <Content side={left} />
      <Content side={right} />
    </Flex>
  );
};
