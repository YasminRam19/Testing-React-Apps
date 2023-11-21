//Import the component we want to test
import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("renders Hello World", () => {
    //1. Arrange
    render(<Greeting />);

    //2. Act
    //...nothing

    //3. Assert
    //getByText will hopefully return an element, if it doesn't find an element, it will throw an error.
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if the button was not clicked", () => {
    //1. Arrange
    render(<Greeting />);

    //2. Act
    //...nothing

    //3. Assert
    const messageElement = screen.getByText("good to see you", {
      exact: false,
    });
    expect(messageElement).toBeInTheDocument();
  });

  test("renders Change! if the button was not clicked", () => {
    //1. Arrange
    render(<Greeting />);

    //2. Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //3. Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render good to see you if the button was clicked", () => {
    //1. Arrange
    render(<Greeting />);

    //2. Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //3. Assert
    //queryByText will return null if an element is not founf
    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).not.toBeInTheDocument();
  });
});
