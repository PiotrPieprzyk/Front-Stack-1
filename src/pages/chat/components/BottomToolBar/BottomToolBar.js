import React, { useContext, useState } from "react";
import { Flex, Button } from "rebass";
import { TextareaAutoResising } from "./TextareaAutoResising";
import sendIcon from "@iconify/icons-mdi/send";
import { Icon } from "@iconify/react";
import { ThemeContext } from "styled-components";
export const BottomToolBar = () => {
  const theme = useContext(ThemeContext);
  const [inputValue, setInputValue] = useState('');

  return (
    <Flex alignItems="center" mt={3} p={3}>
      <TextareaAutoResising value={inputValue} onChange={setInputValue}/>
      <Button
        sx={{
          background: "none",
        }}
        p={2}
        ml={2}
        onClick={()=>{console.log(inputValue)}}
      >
        <Icon icon={sendIcon} height={24} color={theme.colors.primary}></Icon>
      </Button>
    </Flex>
  );
};
