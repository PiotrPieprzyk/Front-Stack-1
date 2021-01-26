import React from "react";
import { Clicker } from "./clicker";
import { render, fireEvent, waitFor, screen, prettyDOM, getByText } from "@testing-library/react";

class ClickerAction {
  container;

  static renderClicker() {
    this.container = render(<Clicker />).container;
  }
  static clickAdd() {
    const buttonAdd = this.container.querySelector("button");
    fireEvent.click(buttonAdd);
  }
  static getCurrentValue(){
    const valueWrapper = this.container.querySelector(".value");
    const value = Number(valueWrapper.innerHTML);
    return value;
  }
}

describe("Clicker test", () => {
  it("Clicked button add 1 to value", () => {
    // Arrange
    ClickerAction.renderClicker();
    // Act
    ClickerAction.clickAdd();
    // Assert
    expect(ClickerAction.getCurrentValue()).toEqual(1);
  });
});
