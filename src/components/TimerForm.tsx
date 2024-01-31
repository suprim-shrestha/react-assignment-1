import { FormEvent, useRef } from "react";

interface TimerFormProps {
  updateTimer: (newTimer: number) => void;
}

function TimerForm(props: TimerFormProps) {
  const timerInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!timerInputRef.current?.value) return;

    props.updateTimer(parseInt(timerInputRef.current.value));

    timerInputRef.current.value = "";
  }

  return (
    <div className="timer-input mt-10">
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="number"
          className="rounded-l px-2 text-black"
          min={0}
          ref={timerInputRef}
          placeholder="Time in Seconds"
        />
        <button
          type="submit"
          className="rounded-r bg-[#46c] px-3 py-2 text-[#282C34] transition-all hover:bg-[#73d4fe]"
        >
          Set Timer
        </button>
      </form>
    </div>
  );
}

export default TimerForm;
