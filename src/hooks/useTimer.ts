import { useEffect, useRef, useState } from 'react';

export const useTimer = (initialTime: number) => {
  const [timer, setTimer] = useState(initialTime);
  const startTimer = useRef(0);
  const isRestTime = useRef(false);

  const resetTimer = () => {
    setTimer(initialTime);
    isRestTime.current = true;
  };

  useEffect(() => {
    startTimer.current = setInterval(() => {
      setTimer((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => {
      clearInterval(startTimer.current);
      isRestTime.current = false;
    };
    // eslint-disable-next-line
  }, [isRestTime.current]);

  return { timer, startTimer, resetTimer };
};
