import React, { useEffect, useContext, useState, useRef } from "react";
import { ThemeContext } from "styled-components";
import { Flex } from "rebass";

export const TextareaAutoResising = (props) => {
  const [value, setValue] = useState();
  const theme = useContext(ThemeContext);
  const textareaRef = useRef();

  const resizeTextArea = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "inherit";
    const computed = window.getComputedStyle(textarea);

    const height =
      parseInt(computed.getPropertyValue("border-top-width"), 10) +
      parseInt(computed.getPropertyValue("padding-top"), 10) +
      textarea.scrollHeight +
      parseInt(computed.getPropertyValue("padding-bottom"), 10) +
      parseInt(computed.getPropertyValue("border-bottom-width"), 10);

    textarea.scroll(0, height);
    textarea.style.height = `${height}px`;
  };

  const resetHeight = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "inherit";
  };

  useEffect(() => {
    textareaRef.current.addEventListener("keydown", resizeTextArea);
    textareaRef.current.addEventListener("mousedown", resizeTextArea);
    textareaRef.current.addEventListener("blur", resetHeight);
    return () => {
      textareaRef.current.removeEventListener("keydown", resizeTextArea);
      textareaRef.current.removeEventListener("mousedown", resizeTextArea);
      textareaRef.current.removeEventListener("blur", resetHeight);
    };
  });

  return (
    <Flex
      flex="1"
      alignContent="center"
      p={2}
      sx={{
        borderRadius: "16px",
        border: `2px solid ${theme.colors.primary}`,
      }}
      bg="black"
    >
      <textarea
        ref={textareaRef}
        type="text"
        style={{
          width: "100%",
          maxHeight: "40vh",
          background: "none",
          border: "none",
          color: theme.colors.white,
          fontSize: `${theme.fontSizes[2]}px`,
          overflowY: "hidden",
        }}
        onChange={(e) => {
          const newValue = e.target.value; 
          props.onChange(newValue);
        }}
        value={props.value}
      />
    </Flex>
  );
};
