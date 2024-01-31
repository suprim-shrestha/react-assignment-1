import { useEffect, useRef, useState } from "react";
import TimerDisplay from "./TimerDisplay";
import TimerForm from "./TimerForm";

const DEFAULT_TIMER = 120;
const TIMER_INTERVAL = 1000;

function Timer() {
  const totalTime = useRef(DEFAULT_TIMER);
  const [timer, setTimer] = useState(totalTime.current);
  const [isStarted, setIsStarted] = useState(false);
  const timerInterval = useRef<NodeJS.Timeout>();
  const resetBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!resetBtnRef.current) return;

    resetBtnRef.current.disabled = true;
  }, []);

  function resetTimer() {
    if (isStarted) return;

    setTimer(totalTime.current);
  }

  function startTimer() {
    setIsStarted(true);
    timerInterval.current = setInterval(() => {
      setTimer((oldTimer) => {
        const newTimer = oldTimer - 1;
        if (newTimer < 0) {
          stopTimer();
          return 0;
        } else {
          return newTimer;
        }
      });
    }, TIMER_INTERVAL);

    if (!resetBtnRef.current) return;

    resetBtnRef.current.disabled = true;
  }

  function stopTimer() {
    setIsStarted(false);
    clearInterval(timerInterval.current);

    if (!resetBtnRef.current) return;

    resetBtnRef.current.disabled = false;
  }

  function toggleTimer() {
    if (isStarted) {
      stopTimer();
    } else {
      startTimer();
    }
  }

  function updateTimer(newTimer: number) {
    totalTime.current = newTimer;
    resetTimer();
  }

  return (
    <>
      <TimerForm isStarted={isStarted} updateTimer={updateTimer} />
      <div className="timer flex items-center justify-between gap-24 py-3">
        <TimerDisplay timer={timer} />
        <div className="my-3 flex flex-row gap-3">
          <button
            onClick={toggleTimer}
            type="button"
            className="rounded bg-gray-300 px-3 py-2 text-[#282C34] transition-all hover:bg-gray-200"
          >
            {isStarted ? "Stop" : "Start"}
          </button>
          <button
            onClick={resetTimer}
            type="button"
            className="rounded bg-gray-300 px-3 py-2 text-[#282C34] transition-all hover:bg-gray-200 disabled:cursor-not-allowed disabled:bg-gray-600"
            ref={resetBtnRef}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Timer;
