import styled from "styled-components";
import React, { useState, useEffect, useRef, Fragment } from "react";

const CustomCursor = styled.div`
  width: 5px;
  height: 5px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  transform: translate3d(-50%, -50%, 0);
  top: 0;
  left: 0;
  transition: 0.1s ease-out;
  pointer-events: none;
`;

const CustomCursorLazy = styled.div`
  width: 60px;
  height: 60px;
  background-color: none;
  border-radius: 50%;
  border: 2px solid white;
  position: absolute;
  transform: translate3d(-50%, -50%, 0);
  top: 0;
  left: 0;
  transition: 0.2s ease-out;
  pointer-events: none;
`;

export const Cursor = () => {
  const cursorRef = useRef();
  const cursorLazyRef = useRef();
  let cursorLazyStartStyle;

  const changeCustomeCursorDimensions = (event) => {
    const cursor = cursorRef.current;
    const cursorLazy = cursorLazyRef.current;

    if (event.target.tagName.toLowerCase() === "button") {
      const targetStyle = getComputedStyle(event.target);
      cursorLazy.style.height = `${targetStyle.height} px`;
      cursorLazy.style.width = `${targetStyle.width + 10} px`;
      const centerElement = {
        top: event.target.getBoundingClientRect().y + parseInt(targetStyle.height) / 2 ,
        left: event.target.getBoundingClientRect().x + parseInt(targetStyle.width) / 2 ,
      }; 
      console.log(centerElement);
      cursorLazy.style.top = `${centerElement.top}px`;
      cursorLazy.style.left = `${centerElement.left}px`;
      cursorLazy.style.borderRadius = "20%";
    } else {
      cursorLazy.style = cursorLazyStartStyle;
      cursorLazy.style.top = `${event.clientY}px`;
      cursorLazy.style.left = `${event.clientX}px`;
    }

    cursor.style.top = `${event.clientY}px`;
    cursor.style.left = `${event.clientX}px`;
  };

  useEffect(() => {
    cursorLazyStartStyle = getComputedStyle(cursorLazyRef.current);
    document.addEventListener("mousemove", changeCustomeCursorDimensions);
    return () => {
      document.removeEventListener("mousemove", changeCustomeCursorDimensions);
    };
  });

  return (
    <Fragment>
      <CustomCursor ref={cursorRef} />
      <CustomCursorLazy ref={cursorLazyRef} />
    </Fragment>
  );
};
