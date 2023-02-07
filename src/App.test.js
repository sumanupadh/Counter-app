/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Counter App", () => {
  beforeAll(() => {
    window.matchMedia =
      window.matchMedia ||
      function () {
        return {
          matches: false,
          addListener: function () {},
          removeListener: function () {},
        };
      };
  });

  test("Load initial page", () => {
    render(<App />);
    const headingElement = screen.getByText(/Switch between time\/date/i);
    const startTimerButton = screen.getByTestId("start-timer-button");
    expect(headingElement).toBeInTheDocument();
    expect(startTimerButton).toBeDisabled();
  });
});
