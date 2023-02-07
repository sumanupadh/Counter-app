/* eslint-disable testing-library/no-node-access */
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../index";

describe("Counter App Modes", () => {
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

  test("Switch between time and date mode selector", async () => {
    // aria-checked true for date and false for time
    render(<Counter />);
    const modeSwitch = screen.getByTestId("modeSwitch");
    fireEvent.click(modeSwitch);
    expect(modeSwitch.getAttribute("aria-checked")).toBe("false");
  });

  test("Enable start timer button once date is selected", async () => {
    render(<Counter />);
    const startDateInput = screen.getByTestId("startDateInput");
    fireEvent.mouseDown(startDateInput);
    fireEvent.change(startDateInput, { target: { value: "2022-12-31" } });
    fireEvent.click(document.querySelector(".ant-picker-cell-selected"));
    const startTimerButton = screen.getByTestId("start-timer-button");
    expect(startTimerButton).toBeEnabled();
  });

  test("Enable start timer button once time is selected", async () => {
    render(<Counter />);
    const modeSwitch = screen.getByTestId("modeSwitch");
    fireEvent.click(modeSwitch);
    const startTimeInput = screen.getByPlaceholderText("Enter time (Seconds)");
    fireEvent.change(startTimeInput, { target: { value: 10 } });
    const startTimerButton = screen.getByTestId("start-timer-button");
    expect(startTimerButton).toBeEnabled();
  });
});
