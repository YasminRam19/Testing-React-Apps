import { render, screen } from "@testing-library/react";
import Async from "./Async";
describe("Async component", () => {
  //Test whether the posts are being rendered correctly
  test("renders posts if request sucessds", async () => {
    //Override fetch function
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First Post" }],
    });

    //1. Arrange
    render(<Async />);

    //2. Act

    //3. Assert
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
