import { useRef, useState } from "react";

function Timer() {
  const [timer, setTimer] = useState(60);
  const isStarted = useRef<boolean>(false);
  const timerInterval = useRef<NodeJS.Timeout>();

  function resetTimer() {
    if (!isStarted.current) {
      setTimer(60);
    }
  }

  function startTimer() {
    if (!isStarted.current) {
      isStarted.current = true;
      timerInterval.current = setInterval(() => {
        setTimer((oldTimer) => {
          const newTimer = oldTimer - 1;
          if (newTimer < 0) {
            clearInterval(timerInterval.current);
            return 0;
          } else {
            return newTimer;
          }
        });
      }, 1000);
    }
  }

  function stopTimer() {
    if (isStarted.current) {
      isStarted.current = false;
      clearInterval(timerInterval.current);
    }
  }

  return (
    <div className="timer flex items-center justify-between gap-24 py-6">
      <h1 className="text-xl">{timer}s</h1>
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
  );
}

export default Timer;
