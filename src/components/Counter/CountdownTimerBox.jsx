import React, { useEffect, useState } from "react";
import { getExpiryDate } from ".";
import useCountdownTimer from "../../hooks/useCountdown";
import {
  DayContent,
  OfferText,
  Parent,
  TimeBox,
  TimerBox,
  TimeWrapper,
} from "./styled";

const CountdownTimerBox = ({ timerSeconds, timerDate }) => {
  const [isTimerOver, toggleTimerOver] = useState(false);
  const targetDate = timerDate
    ? getExpiryDate(new Date(timerDate.format("YYYY-MM-DD")))
    : null;

  const remainingTimerData = useCountdownTimer({
    targetDate: targetDate,
    targetTimeInSeconds: timerSeconds,
  });

  useEffect(() => {
    if (remainingTimerData?.cou < 1000) {
      toggleTimerOver(true);
    }
  }, [remainingTimerData]);

  if (isTimerOver) {
    return <></>;
  }

  const { days, hours, minutes, seconds } = remainingTimerData || {};
  return (
    <Parent>
      <OfferText>Countdown</OfferText>
      <TimerBox>
        <TimeWrapper>
          <TimeBox>{days}</TimeBox>
          <DayContent>Days</DayContent>
        </TimeWrapper>
        <TimeWrapper>
          <TimeBox>{hours}</TimeBox>
          <DayContent>Hours</DayContent>
        </TimeWrapper>
        <TimeWrapper>
          <TimeBox>{minutes}</TimeBox>
          <DayContent>Mins</DayContent>
        </TimeWrapper>
        <TimeWrapper>
          <TimeBox>{seconds}</TimeBox>
          <DayContent>Secs</DayContent>
        </TimeWrapper>
      </TimerBox>
    </Parent>
  );
};

export default CountdownTimerBox;
