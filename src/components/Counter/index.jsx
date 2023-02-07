import { Col, DatePicker, InputNumber, Row, Switch } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../../common/styled";
import CountdownTimerBox from "./CountdownTimerBox";
import { StyledButton, TypeSelectorBox, TypeSelectorText } from "./styled";

export const getExpiryDate = (date) => {
  if (!date) {
    return null;
  }

  const createdAt = new Date(date);
  // This will update the selected target date with EOD
  return new Date(
    createdAt.getFullYear(),
    createdAt.getMonth(),
    createdAt.getDate(),
    23,
    59,
    59
  );
};

const Counter = () => {
  const [timerSeconds, setTimerSeconds] = useState(null);
  const [timerDate, setTimerDate] = useState(null);
  const [isTimerStarted, toggleStartTimer] = useState(false);
  const [showDateSelector, toggleTypeSelector] = useState(true);

  // Reset timer on change of toggle
  useEffect(() => {
    setTimerDate(null);
    setTimerSeconds(null);
    toggleStartTimer(null);
  }, [showDateSelector]);

  // Reset timer on change of inputs
  useEffect(() => {
    toggleStartTimer(null);
  }, [timerDate, timerSeconds]);

  const handleActionButtonClick = () => {
    // Resetting the state when timer stops
    if (isTimerStarted) {
      setTimerDate(null);
      setTimerSeconds(null);
    }
    toggleStartTimer(!isTimerStarted);
  };

  return (
    <Container>
      <Row justify="center">
        <StyledColumn md={24} lg={8}>
          <strong>
            Switch between time/date. Time option allows you to enter seconds
            and date allows you to select the date from when the countdown start
          </strong>
        </StyledColumn>
      </Row>
      <Row justify="center">
        <TypeSelectorBox>
          <TypeSelectorText>Time</TypeSelectorText>
          <Switch data-testid="modeSwitch" onChange={toggleTypeSelector} checked={showDateSelector} />
          <TypeSelectorText>Date</TypeSelectorText>
        </TypeSelectorBox>
      </Row>

      <Row justify="center">
        {showDateSelector ? (
          <DatePicker
            disabledDate={(current) => {
              // disabling selection of all past dates to prevent running of timer to less than 0
              const today = moment().format("YYYY-MM-DD");
              return current && current < moment(today, "YYYY-MM-DD");
            }}
            onChange={(value) => setTimerDate(value)}
            data-testid="startDateInput"
          />
        ) : (
          <InputNumber
            style={{ minWidth: "200px" }}
            placeholder="Enter time (Seconds)"
            onChange={(value) => setTimerSeconds(value)}
          />
        )}
      </Row>

      <StyledButton
        disabled={!timerSeconds && !timerDate}
        onClick={handleActionButtonClick}
        data-testid="start-timer-button"
      >
        {isTimerStarted ? "Stop Timer" : "Start Timer"}
      </StyledButton>

      {isTimerStarted && (
        <CountdownTimerBox timerSeconds={timerSeconds} timerDate={timerDate} />
      )}
    </Container>
  );
};

export default Counter;

export const StyledColumn = styled(Col)`
  margin-top: 30px;
`;
