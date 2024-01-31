import { useRef, useState } from "react";
import TimerDisplay from "./TimerDisplay";
import TimerForm from "./TimerForm";

const DEFAULT_TIMER = 120;
const TIMER_INTERVAL = 1000;

function Timer() {
  const totalTime = useRef(DEFAULT_TIMER);
  const [timer, setTimer] = useState(totalTime.current);
  const [isStarted, setIsStarted] = useState(false);
  const timerInterval = useRef<NodeJS.Timeout>();

  function resetTimer() {
    if (isStarted) return;

    setTimer(totalTime.current);
  }

  function startTimer() {
    if (isStarted) return;

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
  }

  function stopTimer() {
    if (!isStarted) return;

    setIsStarted(false);
    clearInterval(timerInterval.current);
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
            onClick={startTimer}
            type="button"
            className="rounded bg-gray-300 px-3 py-2 text-[#282C34] transition-all hover:bg-gray-200"
          >
            Start
          </button>
          <button
            onClick={stopTimer}
            type="button"
            className="rounded bg-gray-300 px-3 py-2 text-[#282C34] transition-all hover:bg-gray-200"
          >
            Stop
          </button>
          <button
            onClick={resetTimer}
            type="button"
            className="rounded bg-gray-300 px-3 py-2 text-[#282C34] transition-all hover:bg-gray-200"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Timer;
