import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { useChallenge } from "./ChallengeContext";

interface CountdownContextProps {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextProps);

export const useCountdown = () => useContext(CountdownContext);

let countdownTimeout: NodeJS.Timeout;
let timeInitial = 25 * 60;

export function CountdownProvider({ children }: CountdownProviderProps) {
  const { startNewChallenge } = useChallenge();

  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  const [time, setTime] = useState(timeInitial);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setHasFinished(false);
    setTime(timeInitial);
  }

  return (
    <CountdownContext.Provider value={{ minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown }}>
      {children}
    </CountdownContext.Provider>
  );
}