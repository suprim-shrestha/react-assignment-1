interface TimerDisplayProps {
  timer: number;
}

function TimerDisplay(props: TimerDisplayProps) {
  const timeInMinutes = Math.floor(props.timer / 60);
  const timeInSeconds = props.timer % 60;

  const timeRemaining = `${timeInMinutes}m ${timeInSeconds
    .toString()
    .padStart(2, "0")}s`;

  return <h1 className="text-xl">Time Remaining: {timeRemaining}</h1>;
}

export default TimerDisplay;
