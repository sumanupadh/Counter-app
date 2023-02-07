import { useEffect, useState } from "react";

const useCountdownTimer = ({ targetDate, targetTimeInSeconds }) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    targetTimeInSeconds
      ? targetTimeInSeconds * 1000
      : countDownDate - new Date().getTime()
  );

  const getRemainingTimeValues = (countDown) => {
    if (countDown < 0) {
      return null;
    }

    //Calculating days left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));

    //Calculating hours left
    const hours = Math.floor(
      (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    //Calculating mins left
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));

    //Calculating seconds left
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
      countDown,
    };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (targetTimeInSeconds) {
        setCountDown(countDown - 1000);
      } else {
        setCountDown(countDownDate - new Date().getTime());
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetTimeInSeconds, countDown, countDownDate]);

  return getRemainingTimeValues(countDown);
};

export default useCountdownTimer;
