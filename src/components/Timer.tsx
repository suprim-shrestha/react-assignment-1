import { useRef } from "react";
import TimerDisplay from "./TimerDisplay";
import TimerForm from "./TimerForm";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import {
  selectTimerIsStarted,
  selectTimerValue,
  resetTimer,
  decrement,
  startTimer,
  stopTimer,
  setTimer,
} from "@/feature/timer/timerSlice";

const TIMER_INTERVAL = 1000;

function Timer() {
  const timerInterval = useRef<NodeJS.Timeout>();

  const dispatch = useAppDispatch();

  const timer = useAppSelector(selectTimerValue);
  const isStarted = useAppSelector(selectTimerIsStarted);

  function handleResetTimer() {
    dispatch(resetTimer());
    handleStopTimer();
  }

  function handleStartTimer() {
    dispatch(startTimer());
    timerInterval.current = setInterval(() => {
      dispatch(decrement());
    }, TIMER_INTERVAL);
  }

  function handleStopTimer() {
    dispatch(stopTimer());
    clearInterval(timerInterval.current);
  }

  function toggleTimer() {
    if (isStarted) {
      handleStopTimer();
    } else {
      handleStartTimer();
    }
  }

  function handleUpdateTimer(newTimer: number) {
    dispatch(setTimer(newTimer));
    handleResetTimer();
  }

  return (
    <>
      <TimerForm updateTimer={handleUpdateTimer} />
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
            onClick={handleResetTimer}
            type="button"
            className="rounded bg-[#5af44f] px-3 py-2 text-[#282C34] transition-all hover:bg-[#4ca83e]"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Timer;
