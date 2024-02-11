import { useEffect, useRef, useState } from 'react';

export const useProgress = () => {
  const [progress, setProgress] = useState(0);
  const linerTimer = useRef(0);
  const isRestProgress = useRef(false);

  const resetProgress = () => {
    setProgress(0);
    isRestProgress.current = true;
  };

  useEffect(() => {
    linerTimer.current = setInterval(() => {
      setProgress((prev) => prev + 1);
    }, 150);

    return () => {
      clearInterval(linerTimer.current);
      isRestProgress.current = false;
    };
    // eslint-disable-next-line
  }, [isRestProgress.current]);

  return { progress, linerTimer, resetProgress };
};
